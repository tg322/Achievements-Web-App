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

    async function fetchData(apiEndpoints:ApiEndpoints,dataType:IDataTypeProps|null){
        if(!dataType){
            try{
                return await apiEndpoints.fetchAll();
            }catch(error){
                throw new Error('Failed to fetch data: ' + error);
            }
        }
        switch (dataType.type) {
            case'house_initial':
                try{
                    return await apiEndpoints.fetchSingleHouseTotals(String(dataType.value));
                }catch(error){
                    throw new Error('Failed to fetch data: ' + error);
                }
            case'student_year':
                try{    
                    return await apiEndpoints.fetchHousesByYear(Number(dataType.value));
                }catch(error){
                    throw new Error('Failed to fetch data: ' + error);
                }
            default:
                throw new Error('Invalid data type.')
        }
    }

    function getDataType(year:number, house:string | null):IDataTypeProps|null{
        if(year){
            return {type: 'student_year', value:year};
        }else if(house){
            return {type:'house_initial',value:house};
        }else{
            return null
        }
    }

    function getOrientation(pathName:string):string{
        return pathName.includes('vertical')? 'vertical' : 'horizontal';
    }
    
    async function getGraphSettingsAndSetContext(){
        const queryParameters = new URLSearchParams(window.location.search);
        const apiEndpoints = new ApiEndpoints();
        const helpers = new Helper();
        let year = Number(queryParameters.get('student_year'));
        let house = queryParameters.get('house_initial');
        let interval = Number(queryParameters.get('animation_timeout') ?? 30000);
        
        let dataType: IDataTypeProps|null = getDataType(year, house);
        
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