import axios from 'axios';
import * as React from 'react';
import { Helper } from '../../Helpers';
import { IHouseProps } from '../../IHouseInterfaces';
import { useEffect, useState } from 'react';
import longJump from '../../img/randomImage/student-in-science-smiling-with-goggles.png';
import studentsIpad from '../../img/randomImage/year-10-smiling-in-science.png';
import LeaderboardItem from './LeaderboardItem';
import { useGraphContext } from '../../Utils/GraphContextProvider';

function LeaderboardContainer(){

    const{graphState} = useGraphContext();

    
    if(graphState.GraphSettings.type === 'house'){
        return(
            <div id='container' style={{display:'flex', flexDirection:'row', width:'100%', height:'100vh'}}>
                <div id='imagesContainer' style={{display:'flex', flexDirection:'column', width:'60%', height:'100%', position:'relative'}}>
                    {graphState.GraphSettings.dataType && graphState.GraphSettings.dataType.type === 'student_year' && <h1 style={{position:'absolute', top:'calc(50% - 133px)', left:'calc(50% - 270px)', margin:'0px', fontSize:'100px', textAlign:'center', width:'540px', transform: 'rotate(350deg)', fontFamily: '"Courgette", cursive', textShadow:'-1px 2px black', color:'white'}}>
                        Great Work Year {graphState.GraphSettings.dataType.value}
                    </h1>}
    
                    <div id='image1' style={{display:'flex', width:'100%', height:'100%', backgroundImage:`url(${longJump})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}}></div>
                    
                    <div id='image1' style={{display:'flex', width:'100%', height:'100%', backgroundImage:`url(${studentsIpad})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}}></div>
    
                </div>
                <div id='leaderboardContainer' style={{display:'flex', flexDirection:'column', width:'40%', height:'100%'}}>
                    {graphState.GraphSettings.data && graphState.GraphSettings.data.map((singleHouse, key) => {
                            return(
                                <LeaderboardItem key={key} house={singleHouse}/>
                            )
                        })
                    }
                </div>
            </div>
        );
    }else{
        return(
            <></>
        );
    }
    

}

export default React.memo(LeaderboardContainer)