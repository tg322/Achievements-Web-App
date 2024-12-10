import * as React from 'react';
import { useEffect, useState } from 'react';
import { Helper } from '../../Helpers';
import SingleHouse from './SingleHouse';
import HouseTotals from './HouseTotals';
import { useGraphContext } from '../../Utils/GraphContextProvider';

function BarChartContainerHorizontal(){
    const[maxRounded, setMaxRounded] = useState<number>(0);

    const helpers = new Helper();
    const {graphState, graphDispatch} = useGraphContext();
    //needed
    function filterArray(){
        if(graphState.GraphSettings.type==='house'){
            const maxTotal = Math.max(...graphState.GraphSettings.data.map(item => item.houseTotal));

            let maxRounded = 0;

            maxRounded = Math.ceil(maxTotal / 10) * 10;

            setMaxRounded(maxRounded);
        }
        
    }

    useEffect(() => {
            filterArray();
    }, [graphState.GraphSettings.data]);
    
    if(graphState.GraphSettings.type === 'house'){
        if(graphState.GraphSettings.dataType){
        
            if(graphState.GraphSettings.dataType.type === 'house_initial'){
                return(
                    <SingleHouse maxRounded={maxRounded}/>
                );
            }else if(graphState.GraphSettings.dataType.type === 'student_year'){
                return(
                    <HouseTotals maxRounded={maxRounded}/>
                );
            }else{
                return(
                    <HouseTotals maxRounded={maxRounded}/>
                );
            }
        }
        else{
            return(
                <HouseTotals maxRounded={maxRounded}/>
            );
        }
    }else{
        return(<></>);
    }

}

export default BarChartContainerHorizontal