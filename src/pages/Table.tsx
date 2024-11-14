import * as React from 'react';
import bg from '../img/HouseTotalsBackground.png';

function Table(){
    return(
        <div id='container' style={{display:'flex', backgroundImage:`url(${bg})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', width:'100%', height:'100vh', boxSizing:'border-box', padding:'30px', flexDirection:'column'}}>
            <h2 style={{color:'white'}}>CELEBRATING OUR TOP ACHIEVERS</h2>
            <div id='table' style={{display:'flex', flexDirection:'column', width:'100%'}}>
                <div id='table-row' style={{display:'flex', flexDirection:'row', width:'100%', borderBottom:'solid 1px white', boxSizing:'border-box', padding:'10px 0px', justifyContent:'space-between', color:'white'}}>

                    <div id="table-col" style={{display:'flex', flexDirection:'column'}}>
                        <div id='circle-photo' style={{display:'flex', width:'100px', height:'100px', backgroundColor:'red', borderRadius:'200px'}}>

                        </div>
                    </div>

                    <div id="table-col" style={{display:'flex', flexDirection:'column'}}>
                        <p style={{fontSize:'30px', fontWeight:'bold'}}>Matty.L</p>
                    </div>

                    <div id="table-col" style={{display:'flex', flexDirection:'column'}}>
                        <p style={{fontSize:'30px', fontWeight:'bold'}}>Year 9</p>
                    </div>

                    <div id="table-col" style={{display:'flex', flexDirection:'column'}}>
                        <p style={{fontSize:'30px', fontWeight:'bold'}}>48</p>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Table