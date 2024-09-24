import * as React from 'react';
import { IHouseProps } from '../../IHouseInterfaces';
import { useEffect, useState } from 'react';
import stBosco from '../../img/bosco_face.png'
import { motion } from "framer-motion";
import '../BarCharts.css';

type Direction = 'vertical' | 'horizontal';

interface IBarProps{
    pos:number;
    house:IHouseProps;
    heightPercentage:number;
    direction:Direction;
}

function Bar(props: IBarProps){

  const[heightPercentage, setHeightPercentage] = useState<number>(0);

  const screenHeight = window.innerHeight;
  // const screenWidth = window.innerWidth;
  const initialDelay = 5000;
  const delayValue = props.pos * 2100 + initialDelay;

  // const heightStyles = useSpring({
  //   from: {
  //       maxHeight: 0
  //   },
  //   to: {
  //       maxHeight: screenHeight
  //   },
  //   delay:delayValue,
  //   config: {
  //       duration: 1800,
  //   },
  // });

  // const widthStyles = useSpring({
  //   from: {
  //       maxWidth: 0
  //   },
  //   to: {
  //       maxWidth: screenWidth
  //   },
  //   delay:delayValue,
  //   config: {
  //       duration: 1800,
  //   },
  // });

  // const appliedStyles = props.direction === 'horizontal' ? widthStyles : heightStyles;

  useEffect(() =>{
      setHeightPercentage(props.heightPercentage);
  }, [props.heightPercentage])
  if(props.direction === 'horizontal'){
    return(
      <div id='bar-wrapper' style={{ display:'flex', flexDirection:'row-reverse', height:'100%', width:`${heightPercentage+'%'}`, justifyContent:'flex-end', gap:'40px', minWidth:'530px', maxHeight:'140px'}}>
        <div id='bar-container' style={{backgroundColor:`${props.house.houseColor}`, height:'100%', width:'100%', display:'flex', flexDirection:'row', justifyContent:'flex-end', overflow:'hidden', borderRadius:'0px 100px 100px 0px', maxHeight:'140px'}}>
          <div id='bar-content-container' style={{display:'flex', flexDirection:'row', justifyContent:'center',flexShrink: '0', padding: '10px 10px', alignItems:'center', gap:'25px'}}>
            <span style={{fontWeight:'600', fontSize:'35px', color:'white', textTransform:'uppercase', textShadow:'-1px 2px #0000003b', opacity:'0.6'}}>{props.house.houseDescription}</span>
            <span style={{fontSize:'50px', fontWeight:'600', textAlign:'center', color:'white', width:'fit-content'}}>{props.house.houseTotal}</span>
            <div id='circle-saint-image' style={{display:'flex', width:'120px', height:'120px', borderRadius:'200px', backgroundColor:`${props.house.houseColor}`, margin:'auto 0', flexShrink: '0', backgroundImage:`url(${props.house.houseSaintPhoto})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center', filter:'grayscale(100%)'}}>
            </div>
          </div>
        </div>
      </div>
    )
  }  
}
export default Bar