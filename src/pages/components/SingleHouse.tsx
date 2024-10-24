import * as React from 'react';
import { HouseDetails, houseDetailsProps, IHouseProps } from '../../IHouseInterfaces';
import { useState } from 'react';
import Bar from './Bar';

interface SingleHouseProps{
    houses: Array<IHouseProps>;
    houseDetails: houseDetailsProps | null;
    maxRounded:number;
}

function SingleHouse(props:SingleHouseProps){

    return(
        <div style={{display:'flex', width:'100%', height:'100vh', boxSizing:'border-box', flexDirection:'column', backgroundImage:`url(${props.houseDetails?.houseImage})`, position:'relative', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center', justifyContent:'space-between', gap:'30px'}}>
        <div style={{display:'flex', position:'absolute', width:'100%', height:'100%', backgroundColor:`rgb(${props.houseDetails?.darkerHouseColor.r}, ${props.houseDetails?.darkerHouseColor.g},${props.houseDetails?.darkerHouseColor.b})`, opacity:'0.2', zIndex:'1', top:'0', left:'0'}}></div>
        <div style={{display:'flex', flexDirection:'column', backgroundColor:`rgba(${props.houseDetails?.houseColor?.r}, ${props.houseDetails?.houseColor?.g}, ${props.houseDetails?.houseColor?.b}, 0.6)`, zIndex:'4', padding:'30px 0px 20px 0px'}}>
            <h2 style={{fontSize:'40px', margin:'0px', textAlign:'center', fontFamily: '"Bebas Neue", sans-serif', fontWeight:'600', letterSpacing:'4px' }}>GREAT WORK</h2>
            <h1 style={{fontSize:'100px', margin:'0px', textAlign:'center', fontFamily: '"Bebas Neue", sans-serif', fontWeight:'600', letterSpacing:'12px'}}>{props.houseDetails?.houseName.toUpperCase()}</h1>
        </div>
        <div style={{display:'flex', flexDirection:'column', height:'fit-content', gap:'30px', alignItems:'flex-start', zIndex:'4', justifyContent:'center', padding:'0px 10px 0px 0px'}}>
            {props.houses && props.maxRounded && props.houses.map((singleHouse, key) => {
                let heightPercentage = singleHouse.houseTotal / props.maxRounded * 100;
                if(heightPercentage < 35){
                    heightPercentage = 35.5;
                }
                return(
                    <Bar key={key} house={singleHouse} heightPercentage={heightPercentage} pos={key} direction={'horizontal'} singleHouse={true} darkerHouseColor={props.houseDetails?.darkerHouseColor}/>
                )
            })
            }
        </div>
        <div style={{display:'flex', flexDirection:'column', backgroundColor:`rgba(${props.houseDetails?.houseColor?.r}, ${props.houseDetails?.houseColor?.g}, ${props.houseDetails?.houseColor?.b}, 0.6)`, zIndex:'4', padding:'30px 0px 20px 0px'}}>
            <h2 style={{fontSize:'40px', margin:'0px', textAlign:'center', fontFamily: '"Bebas Neue", sans-serif', fontWeight:'600', letterSpacing:'4px' }}>GREAT WORK</h2>
            <h1 style={{fontSize:'100px', margin:'0px', textAlign:'center', fontFamily: '"Bebas Neue", sans-serif', fontWeight:'600', letterSpacing:'12px'}}>{props.houseDetails?.houseName.toUpperCase()}</h1>
        </div>
    </div> 
    );
}
export default SingleHouse