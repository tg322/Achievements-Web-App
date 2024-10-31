import * as React from 'react';
import { useLocation } from 'react-router-dom';
import {GraphSettings, IDataTypeProps, IGraphSettingsProps} from '../IGraphContextProps';
import { useEffect, useState } from 'react';
import { useGraphContext } from './GraphContextProvider';
import { ApiEndpoints } from './ApiEndpoints';
import { Helper } from '../Helpers';

interface IInitialiseProps{
    children:React.ReactNode;
}

function Initialise(props:IInitialiseProps){
    const[graphSettingsCompleted, setGraphSetingsCompleted] = useState<boolean>(false);

    const {graphState, graphDispatch} = useGraphContext();
    const urlLocation = useLocation();
    let graphSettings:IGraphSettingsProps;

    async function fetchData(apiEndpoints:ApiEndpoints,dataType:IDataTypeProps){
        switch (dataType.type) {
            case'house':
                try{
                    return await apiEndpoints.fetchSingleHouseTotals(dataType.house);
                }catch(error){
                    throw new Error('Failed to fetch data: ' + error);
                }
            case'year':
                try{    
                    return await apiEndpoints.fetchHousesByYear(dataType.year);
                }catch(error){
                    throw new Error('Failed to fetch data: ' + error);
                }
            case'none':
                try{
                    return await apiEndpoints.fetchAll();
                }catch(error){
                    throw new Error('Failed to fetch data: ' + error);
                }
            default:
                throw new Error('Invalid data type.')
        }
    }

    function getDataType(year:number, house:string):IDataTypeProps{

        if(year){
            return { type: 'year', year };
        }else if(house){
            return {type:'house',house};
        }else{
            return {type:'none'}
        }
    }

    function getOrientation(pathName:string):string{
        return pathName.includes('vertical')? 'vertical' : 'horizontal';
    }
    
    async function getGraphSettingsAndSetContext(){
        const queryParameters = new URLSearchParams(window.location.search);
        const apiEndpoints = new ApiEndpoints();
        const helpers = new Helper();
        let year = Number(queryParameters.get('year'));
        let house = String(queryParameters.get('house'));
        let interval = Number(queryParameters.get('interval') ?? 30000);
        
        let dataType: IDataTypeProps = getDataType(year, house);
        
        let orientation = getOrientation(urlLocation.pathname);
        let builtHouses;
        try{
            let apiResponse = await fetchData(apiEndpoints, dataType);
            builtHouses = await helpers.buildHouses(apiResponse.data);
        }catch(error){
            throw new Error('Failed to fetch data and build houses.');
        }

        graphSettings = new GraphSettings(dataType, orientation, interval, builtHouses.data);
        if(graphState){
            graphDispatch({type:'CLEAR_GRAPH_STATE'});
        }
        graphDispatch({type:'SET_GRAPH_STATE', payload:graphSettings});
        setGraphSetingsCompleted(true);
    }

    useEffect(()=>{
        getGraphSettingsAndSetContext();
        
    },[])

    if(graphSettingsCompleted){
        return(
            <>{props.children}</>
        );
    }else{
        return(<></>);
    }
    
}
export default Initialise