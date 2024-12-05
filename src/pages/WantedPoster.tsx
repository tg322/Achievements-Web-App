import * as React from 'react';
import './wanted.css'
import woodBG from '../img/wooden_background.png'
import RippedPoster1 from '../img/ripped-paper-1.svg'
import RippedPoster2 from '../img/ripped-paper-2.svg'
import RippedPoster3 from '../img/ripped-paper-3.svg'
import RippedPoster4 from '../img/ripped-paper-4.svg'
import RippedPoster5 from '../img/ripped-paper-5.svg'
import RippedPoster6 from '../img/ripped-paper-1.svg'
import user from '../img/user-solid.svg';
import student from '../img/randomImage/year-10-smiling-in-science.png';
import handLeft from '../img/hand-point-left-regular.svg';
import handRight from '../img/hand-point-right-regular.svg';
import { useGraphContext } from '../Utils/GraphContextProvider';
import { IStudentProps } from '../IStudentInterfaces';

function WantedPoster(){

    const{graphState} = useGraphContext();

    const pages = [RippedPoster1, RippedPoster2, RippedPoster3, RippedPoster4, RippedPoster5, RippedPoster6];
    const rotate = ['354deg', '0deg','6deg', '12deg', '354deg', '354deg']

    if(graphState.GraphSettings.type === 'student'){
        return(
            <div style={{width:'100%', minHeight:'100vh', height:'100vh', display:'flex', alignItems:'center', justifyContent:'center', backgroundImage:`url(${woodBG})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', boxSizing:'border-box'}}>
                <div style={{display:'flex', flexDirection:'column', width:'100%', height:'100%', gap:'60px'}}>
                    <div style={{display:'flex', flexDirection:'row', width:'100%', position:'relative', justifyContent:'center', alignItems:'center', boxSizing:'border-box', paddingTop:'20px'}}>

                        <div style={{display:'flex', height:'100px', width:'100px', backgroundColor:'#43291c', flexShrink:'0', borderRadius:'200px', position:'absolute', left:'50px'}}>

                        </div>

                        <div style={{display:'flex', height:'100%', width:'calc(100% - 200px)', backgroundColor:'#43291c', padding:'10px', boxSizing:'border-box', zIndex:'10', justifyContent:'center', color:'wheat'}}>
                            <h1 style={{fontFamily:'Ultra', margin:'0px', fontSize:'80px', textAlign:'center', letterSpacing:'30px', fontWeight:'200'}}>WANTED</h1>
                        </div>

                        <div style={{display:'flex', height:'100px', width:'100px', backgroundColor:'#43291c', flexShrink:'0', borderRadius:'200px', position:'absolute',left:'calc(100% - 150px)'}}>

                        </div>
                    </div>
                    
                    <div style={{display:'flex', flexDirection:'row', width:'100%', flexWrap:'wrap', gap:'60px', justifyContent:'center'}}>
                    {graphState.GraphSettings.data.students.map((student:IStudentProps,key) => {
                        if(key <= 5){
                            return(
                                <div key={key} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
    
                                    <div style={{display:'flex', width:'400px', height:'440px', rotate:`${rotate[key]}`, backgroundImage:`url(${pages[key]})`, backgroundPosition:'center', backgroundSize:'contain', backgroundRepeat:'no-repeat', color:'#483226'}}>
                                        <div style={{width:'100%', display:'flex', flexDirection:'column', padding:'50px 40px 40px', alignItems:'center', gap:'15px'}}>
                                            <div style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'center', gap:'10px'}}><img style={{width:'30px'}} src={handRight}/><h1 style={{fontFamily:'Ultra', margin:'0px', fontSize:'40px'}}>WANTED</h1><img style={{width:'30px'}} src={handLeft}/></div>
                                            <img src={student.blob? student.blob : user} style={{width:'160px', height:'130px', objectFit:'cover', objectPosition:'0px -20px', filter:'sepia(1)', border:'solid 3px brown'}}/>
                                            <h1 style={{fontFamily:'Ultra', margin:'0px', fontSize:'30px'}}>{student.studentForename + ' ' + '(' + student.studentReg + ')' }</h1>
                                            <h1 style={{fontFamily:'Ultra', margin:'0px', fontSize:'30px'}}>POINTS: {student.points}</h1>
                                        </div>
                                    </div>
    
                                </div>
                            )
                        }
                    })}
                    </div>
                    <div style={{display:'flex', flexDirection:'row', width:'100%', position:'relative', justifyContent:'center', alignItems:'center', boxSizing:'border-box', paddingTop:'20px'}}>

                        <div style={{display:'flex', height:'100px', width:'100px', backgroundColor:'#43291c', flexShrink:'0', borderRadius:'200px', position:'absolute', left:'50px'}}>

                        </div>

                        <div style={{display:'flex', height:'123px', width:'calc(100% - 200px)', backgroundColor:'#43291c', padding:'10px', boxSizing:'border-box', zIndex:'10', justifyContent:'center', color:'wheat', alignItems:'center'}}>
                            <h1 style={{fontFamily:'Ultra', margin:'0px', fontSize:'50px', textAlign:'center', fontWeight:'200'}}>FOR FANTASTIC ACHIEVEMENT</h1>
                        </div>

                        <div style={{display:'flex', height:'100px', width:'100px', backgroundColor:'#43291c', flexShrink:'0', borderRadius:'200px', position:'absolute',left:'calc(100% - 150px)'}}>

                        </div>
                    </div>
                </div>
            </div>
        );
    }else{
        return(<></>)
    }
}

export default WantedPoster