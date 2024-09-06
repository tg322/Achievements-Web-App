import * as React from 'react';
import { IHouseProps } from '../../IHouseInterfaces';
import { useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';

interface IBarProps{
    pos:number;
    house:IHouseProps;
    heightPercentage:number;
}

function Bar(props: IBarProps){

  const[heightPercentage, setHeightPercentage] = useState<number>(0);

  const screenHeight = window.innerHeight;
  const initialDelay = 5000;
  const delayValue = props.pos * 400 + initialDelay;

  const styles = useSpring({
    from: {
        maxHeight: 0
    },
    to: {
        maxHeight: screenHeight
    },
    delay:delayValue,
    config: {
        duration: 1800,
    },
  })

  useEffect(() =>{
      setHeightPercentage(props.heightPercentage);
  }, [props.heightPercentage])
  return(
    <animated.div style={{...styles,display:'flex', flexDirection:'column', height:`${heightPercentage}%`, width:'100%', justifyContent:'flex-end'}}>
          <div style={{display:'flex', width:'120px', height:'120px', borderRadius:'200px', backgroundColor:`${props.house.houseColor}`, margin:'0 auto', flexShrink: '0'}}></div>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'center',flexShrink: '0'}}>
            <span style={{fontSize:'40px', fontWeight:'600', textAlign:'center', color:'white'}}>{props.house.houseTotal}</span>
          </div>
          <animated.div style={{backgroundColor:`${props.house.houseColor}`, height:'100%'}}></animated.div>
          <div style={{display:'flex', height:'150px', width:'100%', justifyContent:'center', alignItems:'center', flexShrink: '0', backgroundColor:`${props.house.houseColor}`}}>
            <span style={{transform: 'rotate(270deg)', fontWeight:'600', fontSize:'30px', color:'white'}}>{props.house.houseDescription}</span>
          </div>
    </animated.div>
  )
}
export default Bar