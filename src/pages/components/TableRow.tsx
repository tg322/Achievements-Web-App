import * as React from 'react';

interface ITableRowProps{
    children:React.ReactNode;
}

function TableRow(props:ITableRowProps){

    return(
        <div id='table-row' style={{display:'flex', flexDirection:'row', width:'100%', boxSizing:'border-box', justifyContent:'space-between', color:'#e1b164', gap:'20px', borderBottom:'solid 1px #e1b1642e', paddingBottom:'10px'}}>
            {props.children}
        </div>
    );
}
export default TableRow