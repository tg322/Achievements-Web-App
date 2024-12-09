import * as React from 'react';
import { useLocation } from 'react-router-dom';
import {IGraphSettingsProps, DataType, IDataTypeProps, StudentGraphSettings, HouseGraphSettings, WantedGraphSettings} from '../IGraphContextProps';
import { useEffect, useState } from 'react';
import { useGraphContext } from './GraphContextProvider';
import { ApiEndpoints } from './ApiEndpoints';
import { Helper } from '../Helpers';
import BarChart from '../pages/BarChart';
import Leaderboard from '../pages/Leaderboard';
import Table from '../pages/Table';
import SPCCSplashScreen from '../pages/components/SPCCSplashScreen';
import WantedPoster from '../pages/Wanted';

interface IInitialiseProps{
    children:React.ReactNode;
}

function Initialise(props:IInitialiseProps){
    const{
        children
    } = props

    const[graphSettingsCompleted, setGraphSetingsCompleted] = useState<boolean>(false);

    const queryParameters = new URLSearchParams(window.location.search);
    const apiEndpoints = new ApiEndpoints();
    const helpers = new Helper();
    const urlLocation = useLocation();
    let graphSettings:IGraphSettingsProps;
    let apiURL:string = 'https://achievements-api.stpaulscatholiccollege.co.uk';
    const {graphState, graphDispatch} = useGraphContext();

    async function testConnection(){
        try{
            const apiResponse = await apiEndpoints.pingInternalApi();
            if(apiResponse.success){
                apiURL = 'http://172.23.243.76:81';
            }
        }catch(error){
            console.log('Error');
        }
    }   

    async function initialiseBarchartAndLeaderboard(){
        let orientation = await helpers.getOrientation(urlLocation.pathname);
        if(!orientation.success){
            throw new Error('Orientation failed.');
        }
        let year = Number(queryParameters.get('student_year'));
        let house = queryParameters.get('house_initial');
        let interval = Number(queryParameters.get('animation_timeout') ?? 30000);
        let dataType = getHouseDataType(year, house);

        let builtHouses;
        try{
            const apiResponse = await apiEndpoints.fetchData(apiURL, '/houses', dataType);
            builtHouses = await helpers.buildHouses(apiResponse.data);
        }catch(error){
            throw new Error('Failed to fetch data and build houses.');
        }

        graphSettings = new HouseGraphSettings('house', dataType, builtHouses.data, interval, orientation.data);
        setGraphState();
        setGraphSetingsCompleted(true);
    }


    async function initialiseTable(){
        try {
            await testConnection();
            let orientation = await helpers.getOrientation(urlLocation.pathname);
            if(!orientation.success){
                throw new Error('Orientation failed.');
            }
            let interval = Number(queryParameters.get('animation_timeout') ?? 30000);
            
            let dataTypes = await helpers.getStudentsDataTypes(queryParameters);
            
            const apiResponse = await apiEndpoints.fetchData(apiURL, '/topachievers', dataTypes.data);
            const builtStudents = await helpers.buildStudents(apiResponse.data);

            graphSettings = new StudentGraphSettings('student', dataTypes.data, builtStudents.data, interval, orientation.data);
            setGraphState();
            setGraphSetingsCompleted(true);
        } catch (error) {
            console.error('Error in initialiseTable:', error);
        }
    }

    async function initialiseWanted(){
        try {
            await testConnection();
            let orientation = await helpers.getOrientation(urlLocation.pathname);
            if(!orientation.success){
                throw new Error('Orientation failed.');
            }
            let interval = Number(queryParameters.get('animation_timeout') ?? 30000);
            
            let dataTypes = await helpers.getStudentsDataTypes(queryParameters);
            
            const apiResponse = await apiEndpoints.fetchData(apiURL, '/topachievers', dataTypes.data);
            const builtStudents = await helpers.buildStudents(apiResponse.data);
            let rippedPostersResponse = await helpers.fetchBlobsAndSendURL();

            graphSettings = new WantedGraphSettings('wanted', dataTypes.data, builtStudents.data, rippedPostersResponse, interval, orientation.data);

            setGraphState();
            setGraphSetingsCompleted(true);
        } catch (error) {
            console.error('Error in initialiseWanted:', error);
        }
    }

    function getHouseDataType(year:number, house:string | null):IDataTypeProps|null{
        if(year){
            return new DataType('student_year',year)
        }else if(house){
            return new DataType('house_initial',house)
        }else{
            return null
        }
    }

    function setGraphState(){
        if(graphState){
            graphDispatch({type:'CLEAR_GRAPH_STATE'});
        }
        graphDispatch({type:'SET_GRAPH_STATE', payload:graphSettings});
        setGraphSetingsCompleted(true);
    }

    // useEffect(()=>{
    //     React.Children.map(children, (child) => {
    //         if(React.isValidElement(child) && child.type === BarChart){
    //             initialiseBarchartAndLeaderboard();
    //         }else if(React.isValidElement(child) && child.type === Leaderboard){
    //             initialiseBarchartAndLeaderboard();
    //         }else if(React.isValidElement(child) && child.type === Table){
    //             initialiseTableAndWanted();
    //         }else if(React.isValidElement(child) && child.type === WantedPoster){
    //             initialiseTableAndWanted();
    //         }
    //         else{
    //         return(()=>{
    //             throw new Error('Incorrect child type provided.');
    //         })
    //         }
    //     })
    // },[children]);
    let currentLocation = urlLocation.pathname
    useEffect(()=>{
        
        if(currentLocation.includes('/barchart')){
            initialiseBarchartAndLeaderboard();
        }else if(currentLocation.includes('/leaderboard')){
            initialiseBarchartAndLeaderboard();
        }else if(currentLocation.includes('/table')){
            initialiseTable();
        }else if(currentLocation.includes('/wanted')){
            initialiseWanted();
        }
    },[currentLocation])
    
        return(<>{children}</>);
}
export default Initialise