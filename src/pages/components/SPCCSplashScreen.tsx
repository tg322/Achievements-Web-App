import * as React from 'react';
import spccLogo from '../../img/college_logo.svg'

function SPCCSplashScreen(){
    return(
        <div style={{display:'flex', width:'100%', height:'100vh', justifyContent:'center', alignItems:'center', backgroundColor:'#140d53'}}>
            <img style={{width:'800px'}} src={spccLogo}/>
        </div>
    );
}
export default SPCCSplashScreen