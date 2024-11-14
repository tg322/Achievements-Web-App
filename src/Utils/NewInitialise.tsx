import * as React from 'react';
import { useLocation } from 'react-router-dom';
import {GraphSettings, IGraphSettingsProps, DataType, IDataTypeProps} from '../IGraphContextProps';
import { useEffect, useState } from 'react';
import { useGraphContext } from './GraphContextProvider';
import { ApiEndpoints } from './ApiEndpoints';
import { Helper } from '../Helpers';
import BarChart from '../pages/BarChart';
import Leaderboard from '../pages/Leaderboard';
import { jsx } from 'react/jsx-runtime';
import Table from '../pages/Table';

interface IInitialiseProps{
    children:React.ReactNode;
}

function NewInitialise(props:IInitialiseProps){
    const{
        children
    } = props

    const[graphSettingsCompleted, setGraphSetingsCompleted] = useState<boolean>(false);

    const queryParameters = new URLSearchParams(window.location.search);
    const apiEndpoints = new ApiEndpoints();
    const helpers = new Helper();
    const urlLocation = useLocation();
    let graphSettings:IGraphSettingsProps;
    const {graphState, graphDispatch} = useGraphContext();

    async function initialiseBarchartAndLeaderboard(){
        let orientation = getOrientation(urlLocation.pathname);
        let year = Number(queryParameters.get('student_year'));
        let house = queryParameters.get('house_initial');
        let interval = Number(queryParameters.get('animation_timeout') ?? 30000);
        let dataType = getHouseDataType(year, house);

        let builtHouses;
        try{
            const apiResponse = await apiEndpoints.fetchData('/houses', dataType);
            builtHouses = await helpers.buildHouses(apiResponse.data);
        }catch(error){
            throw new Error('Failed to fetch data and build houses.');
        }

        graphSettings = new GraphSettings(dataType, orientation, interval, builtHouses.data);
        setGraphState();
        setGraphSetingsCompleted(true);
    }
    async function initialiseTable(){
        
        let interval = Number(queryParameters.get('animation_timeout') ?? 30000);
        let orientation = getOrientation(urlLocation.pathname);
        let dataTypes = getStudentsDataTypes();

        let builtHouses;
        try{
            const apiResponse = await apiEndpoints.fetchData('/topachievers',dataTypes);
            builtHouses = await helpers.buildHouses(apiResponse.data);
        }catch(error){
            throw new Error('Failed to fetch data and build houses.');
        }
        

        graphSettings = new GraphSettings(dataTypes, orientation, interval, builtHouses.data);
        setGraphState();
        setGraphSetingsCompleted(true);
    }
    function getOrientation(pathName:string):string{
        return pathName.includes('vertical')? 'vertical' : 'horizontal';
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

    function getStudentsDataTypes(){
        let dataTypesTest:IDataTypeProps[] = [];
        
        const entriesArray = Array.from(queryParameters.entries());
        if(entriesArray.length === 0) return null;
        entriesArray.forEach(([key, value]) => {
            if(key !== 'animation_timeout')dataTypesTest.push(new DataType(key,value))
        });
        return dataTypesTest
    }
    function setGraphState(){
        if(graphState){
            graphDispatch({type:'CLEAR_GRAPH_STATE'});
        }
        graphDispatch({type:'SET_GRAPH_STATE', payload:graphSettings});
    }

    useEffect(()=>{
        React.Children.map(children, (child) => {
            if(React.isValidElement(child) && child.type === BarChart){
                initialiseBarchartAndLeaderboard();
            }else if(React.isValidElement(child) && child.type === Leaderboard){
                initialiseBarchartAndLeaderboard();
            }else if(React.isValidElement(child) && child.type === Table){
                initialiseTable();
            }else{
                return(()=>{
                    throw new Error('Incorrect child type provided.');
                })
            }
        })
    },[graphSettingsCompleted]);

    if(graphSettingsCompleted){
        return(<>{children}</>);
    }else{
        return(<></>);
    }
    
}
export default NewInitialise