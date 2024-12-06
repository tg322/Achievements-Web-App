import * as React from 'react';
import './wanted.css'
import woodBG from '../img/wooden_background.png'
import { useGraphContext } from '../Utils/GraphContextProvider';
import { IStudentProps } from '../IStudentInterfaces';
import WantedPoster from './components/WantedPoster';
import { useEffect, useState } from 'react';
import { Helper } from '../Helpers';

function Wanted(){

    const[pages, setPages] = useState<string[]>([])

    const{graphState} = useGraphContext();

    const rotate = [354, 0,6, 12, 354, 354];

    useEffect(()=>{
        if(graphState.GraphSettings.type === 'wanted'){
            setPages(graphState.GraphSettings.rippedPosters);
        }
    },[])

    if(graphState.GraphSettings.type === 'wanted'){
        return(
            <div style={{width:'100%', minHeight:'100vh', height:'100vh', display:'flex', alignItems:'center', justifyContent:'center', backgroundImage:`url(${woodBG})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', boxSizing:'border-box',position:'relative'}}>

                <div style={{display:'flex', flexDirection:'column', width:'100%', height:'100%', gap:'60px'}}>
                    <div style={{display:'flex', flexDirection:'row', width:'100%', position:'relative', justifyContent:'center', alignItems:'center', boxSizing:'border-box', paddingTop:'100px'}}>

                        <div style={{display:'flex', height:'170px', width:'170px', backgroundColor:'#43291c', flexShrink:'0', borderRadius:'200px', position:'absolute', left:'50px'}}>

                        </div>

                        <div style={{display:'flex', width:'calc(100% - 200px)', backgroundColor:'#43291c', padding:'50px 10px', boxSizing:'border-box', zIndex:'10', justifyContent:'center', color:'wheat'}}>
                            <h1 style={{margin:'0px', fontSize:'80px', textAlign:'center', fontWeight:'200', position:'absolute', top:'40px', fontFamily:'courgette', rotate:'346deg'}}>Today's</h1>
                            <h1 style={{fontFamily:'Ultra', margin:'0px', fontSize:'60px', textAlign:'center', fontWeight:'200'}}>BRILLIANCE BOUNTY</h1>
                        </div>

                        <div style={{display:'flex', height:'170px', width:'170px', backgroundColor:'#43291c', flexShrink:'0', borderRadius:'200px', position:'absolute',left:'calc(100% - 220px)'}}>

                        </div>
                    </div>
                    {graphState.GraphSettings.data.students && graphState.GraphSettings.data.students.length > 0 &&
                    <div style={{display:'flex', flexDirection:'row', width:'100%', flexWrap:'wrap', gap:'60px', justifyContent:'center'}}>
                        {pages && graphState.GraphSettings.data.students.map((student:IStudentProps,key) => {
                            if(key <= 5){
                                
                                return(
                                    <WantedPoster keyPos={key} key={key} student={student} rotate={rotate[key]} page={pages[key]}/>
                                    
                                )
                            }
                        })}
                    </div>
                    }
                        {graphState.GraphSettings.data.students && graphState.GraphSettings.data.students.length === 0 && 
                        <div style={{display:'flex', flexDirection:'column', width:'100%', flexWrap:'wrap', justifyContent:'center', height:'100%', overflow:'hidden', alignContent:'center'}}>
                            <h1 style={{fontFamily:'Courgette', margin:'0px', fontSize:'100px', textAlign:'center', fontWeight:'200', height:'fit-content', color:'wheat'}}>Stay Tuned for</h1>
                            <h1 style={{fontFamily:'Courgette', margin:'0px', fontSize:'100px', textAlign:'center', fontWeight:'200', height:'fit-content', color:'wheat'}}>Today's Most Wanted!</h1>
                        </div>
                        }
                    
                </div>
            </div>
        );
    }else{
        return(<></>)
    }
}

export default Wanted