import * as React from 'react';
import bg from '../img/HouseTotalsBackground.png';
import { useGraphContext } from '../Utils/GraphContextProvider';
import { IStudentProps } from '../IStudentInterfaces';

function Table(){

    const{graphState} = useGraphContext();

    if(graphState.GraphSettings.type === 'student'){
        return(
            <div id='container' style={{display:'flex', backgroundImage:`url(${bg})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', width:'100%', height:'100vh', boxSizing:'border-box', padding:'30px', flexDirection:'column', alignItems:'center'}}>
                <h1 style={{color:'white'}}>CELEBRATING OUR TOP ACHIEVERS</h1>
                <div id='table' style={{display:'flex', flexDirection:'column', width:'100%'}}>

                    {graphState.GraphSettings.type === 'student' && graphState.GraphSettings.data.map((student:IStudentProps,key) => {
    
                        return(
                            <div key={key} id='table-row' style={{display:'flex', flexDirection:'row', width:'100%', borderBottom:'solid 1px white', boxSizing:'border-box', padding:'10px 0px', justifyContent:'space-between', color:'white'}}>
    
                                <div id="table-col" style={{display:'flex', flexDirection:'column'}}>
                                    <div id='circle-photo' style={{display:'flex', width:'100px', height:'100px', backgroundColor:'red', borderRadius:'200px'}}>
    
                                    </div>
                                </div>
    
                                <div id="table-col" style={{display:'flex', flexDirection:'column'}}>
                                    <p style={{fontSize:'30px', fontWeight:'bold'}}>{student.studentName}</p>
                                </div>
    
                                <div id="table-col" style={{display:'flex', flexDirection:'column'}}>
                                    <p style={{fontSize:'30px', fontWeight:'bold'}}>Year {student.studentYear}</p>
                                </div>
    
                                <div id="table-col" style={{display:'flex', flexDirection:'column'}}>
                                    <p style={{fontSize:'30px', fontWeight:'bold'}}>{student.points}</p>
                                </div>
    
                            </div>
                        );
                    })}

                </div>
            </div>
        );
    }else{
        return(<></>);
    }

}
export default Table