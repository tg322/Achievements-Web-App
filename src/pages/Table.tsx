import * as React from 'react';
import bg from '../img/HouseTotalsBackground.png';
import { useGraphContext } from '../Utils/GraphContextProvider';
import { IStudentProps } from '../IStudentInterfaces';
import user from '../img/user-solid.svg';
import './Table.css';
import Banner from './components/Banner';
import BannerContent from './components/BannerContent';
import { IGraphSettingsProps } from '../IGraphContextProps';
import crown from '../img/crown-sharp-duotone-solid.svg';
import { useEffect, useState } from 'react';
import TableRow from './components/TableRow';
import TableColumn from './components/TableColumn';

function Table(){
    const{graphState} = useGraphContext();

    if(graphState.GraphSettings.type === 'student'){
        
        return(
            <div style={{display:'flex', flexDirection:'column', backgroundColor:'#1d333d', backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', width:'100%', boxSizing:'border-box', padding:'0px 30px 30px 30px', minHeight:'100vh', justifyContent:'space-between'}}>
                <div style={{display:'flex', backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', width:'100%', flexDirection:'column', alignItems:'center', height:'700px'}}>
                    <div className='bannerContainer' style={{position:'absolute', boxSizing:'border-box', padding:'0px 30px'}}>
                        {graphState.GraphSettings.data.topThree.map((student:IStudentProps,key) => {
                            return(
                                <Banner key={key} keyPos={key} type='Parent' backgroundColor={student.houseColor} size={key === 0? 'Medium' : key === 1? 'Large' : 'Small'}>
                                    <Banner keyPos={key} type='Inset' backgroundColor={student.darkerHouseColor}/>
                                    <Banner keyPos={key} type='Inset Two' backgroundColor={student.houseColor}/>
                                    <BannerContent keyPos={key} studentName={student.studentForename + ' ' + student.studentReg} studentPoints={student.points} backgroundColor={student.darkerHouseColor} studentPhoto={student.blob? student.blob : undefined}/>
                                </Banner>
                            )
                            
                        })}
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'column', width:'100%', gap:'30px'}}>
                    <div className='roleOfHonourHeadingContainer'>
                        <img style={{width:'200px'}} src={crown}/>
                        <h1 style={{color:'#e1b164', margin:'0px', fontFamily: 'Bebas Neue", sans-serif', fontWeight:'400', fontSize:'60px'}}>THIS WEEK'S</h1>
                        <h1 style={{color:'#e1b164', fontFamily:'RoyalWedding', fontSize:'180px', fontWeight:'normal', margin:'0px', lineHeight:'0.9'}}>Roll of Honour</h1>
                    </div>
                    
                
                    <div id='table' style={{display:'flex', flexDirection:'column', width:'100%', gap:'10px'}}>
                        {graphState.GraphSettings.data.students.map((student:IStudentProps,key) => {
                            if(key < 7){
                                return(
                                    <TableRow key={key} keyPos={key}>
                                        <TableColumn width='10%'>
                                            <div style={{display:'flex', flexDirection:'row', gap:'0px', justifyContent:'center'}}>
                                                <span style={{fontSize:'40px', fontWeight:'bold', margin:'0px'}}>{Number(key) + 4}</span><span style={{fontSize:'25px'}}>th</span>
                                            </div>
                                        </TableColumn>
                                        <TableColumn width='80%'>
                                            <div style={{display:'flex', flexDirection:'row', gap:'25px', alignItems:'center'}}>
                                                <div id='circle-photo' style={{display:'flex', width:'60px', height:'60px', backgroundColor:'white', borderRadius:'200px', alignItems:'center', justifyContent:'center', overflow:'hidden', border:'solid 4px #e1b164', flexShrink:'0'}}>
                                                    <div id='photo' style={{display:'flex', width:`${student.blob? '100px' : '40px'}`, height:`${student.blob? '100px' : '40px'}`, backgroundImage:`url(${student.blob? student.blob : user})`, backgroundRepeat:'no-repeat', backgroundSize:'contain', backgroundPosition:'center'}}>
                                                        
                                                    </div>
                                                </div>
                                                <p style={{fontSize:'40px', fontWeight:'bold', margin:'0px', textOverflow:'ellipsis', overflow:'hidden', textWrap:'nowrap'}}>{student.studentForename + ' ' + student.studentSurname + ' ' + student.studentReg}</p>
                                            </div>
                                        </TableColumn>
                                        <TableColumn width='auto'>
                                            <div style={{width:'60px', height:'60px', display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'#e1b164', borderRadius:'200px'}}>
                                                <p style={{fontSize:'35px', fontWeight:'800', margin:'0px', color:'#1d333d'}}>{student.points}</p>
                                            </div>
                                            
                                        </TableColumn>
                                    </TableRow>
                                );
                            } 
                        })}
                    </div>
                </div>
            </div>   
        );
    }else{
        return(<></>);
    }

}
export default React.memo(Table)