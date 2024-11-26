import * as React from 'react';
import '../Table.css';
import user from '../../img/user-solid.svg';
import wreath from '../../img/305501.svg'

export type TriangleType = 'Parent' | 'Inset' | 'Inset Two';

interface IBannerTriangleProps{
    backgroundColor:string;
    studentName:string;
    studentPoints:number;
    studentPhoto?:string;
    keyPos:number;
}

function BannerContent(props:IBannerTriangleProps){
    return(
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', zIndex:'9', alignSelf:'end', gap:'30px', position:'relative', justifyContent:'space-between', height:'100%'}}>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', alignSelf:'end', gap:'30px', position:'relative', margin:'0px auto', paddingTop:'20px', boxSizing:'border-box'}}>
                <div style={{display:'flex', position:'absolute', width:'140px', height:'140px', backgroundImage:`url(${wreath})`, backgroundRepeat:'no-repeat', backgroundSize:'contain', top:'30px'}}></div>
                <div id='circle-photo' style={{display:'flex', width:'100px', height:'100px', backgroundColor:'white', borderRadius:'200px', alignItems:'center', justifyContent:'center', border:`solid 4px ${props.backgroundColor}`, overflow:'hidden'}}>
                    <div id='photo' style={{display:'flex', width:'120px', height:'120px', backgroundRepeat:'no-repeat', backgroundSize:'contain', backgroundPosition:'center', backgroundImage:`url(${props.studentPhoto? props.studentPhoto : user})`}}>

                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <span style={{fontSize:'30px', color:'white', fontWeight:'600'}}>{props.studentName}</span>
                    <span style={{fontSize:'45px', color:'#ffffffa6', fontWeight:'600', textShadow: 'rgba(0, 0, 0, 0.23) -1px 2px'}}>{props.studentPoints}</span>
                </div>
            </div>
            <h1 style={{margin:'0px', fontWeight:'400', fontSize:'60px', textShadow: 'rgba(0, 0, 0, 0.23) -1px 2px', color:'#ffffffa6'}}>{props.keyPos === 0? '2nd' : props.keyPos === 1? '1st' : '3rd'}</h1>
            
        </div>
    );
}
export default React.memo(BannerContent)