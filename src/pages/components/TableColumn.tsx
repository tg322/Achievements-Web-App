import * as React from 'react';

interface ITableColumnProps{
    children:React.ReactNode;
    width:string;
}

function TableRow(props:ITableColumnProps){
    return(
        <div id="table-col" style={{display:'flex', flexDirection:'column', width:`${props.width}`, justifyContent:'center'}}>
            {props.children} 
        </div>
    );
}
export default TableRow