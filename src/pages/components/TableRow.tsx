import * as React from 'react';
import '../Table.css';
import { useEffect, useState } from 'react';
import { useGraphContext } from '../../Utils/GraphContextProvider';

interface ITableRowProps{
    children:React.ReactNode;
    keyPos:number;
}

function TableRow(props:ITableRowProps){

    const[animationClass, setAnimationClass] = useState<string>('');

    const{graphState} = useGraphContext();

    useEffect(() => {
        setTimeout(() => {
            setAnimationClass(' tableRowVisible')
            }, graphState.GraphSettings.interval + props.keyPos * 200);
    }, []);

    return(
        <div className={'tableRow' + animationClass} id='table-row'>
            {props.children}
        </div>
    );
}
export default TableRow