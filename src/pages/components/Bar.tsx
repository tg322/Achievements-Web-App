import * as React from 'react';
import { Direction, IHouseProps, RGBColorProps } from '../../IHouseInterfaces';
import { useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import stBosco from '../../img/bosco_face.png'
import SingleHouse from './SingleHouse';
import { useGraphContext } from '../../Utils/GraphContextProvider';


interface IBarProps{
    pos:number;
    house:IHouseProps;
    heightPercentage:number;
}

function Bar(props: IBarProps){
  const[animationID, setAnimationID] = useState<string>("bar-wrapper-closed");

  const {graphState} = useGraphContext();

  let darkColor = `rgb(${props.house.darkerHouseColor?.r}, ${props.house.darkerHouseColor?.g}, ${props.house.darkerHouseColor?.b})`;
  let houseColor = `rgb(${props.house.houseColor?.r}, ${props.house.houseColor?.g}, ${props.house.houseColor?.b})`;

  
  useEffect(() => {
    
      setTimeout(() => {
        setAnimationID('bar-wrapper-open');
      }, graphState.GraphSettings.interval);
    
  }, []);

  if(graphState.GraphSettings.orientation === 'horizontal'){
    if(graphState.GraphSettings.dataType && !Array.isArray(graphState.GraphSettings.dataType) && graphState.GraphSettings.dataType.type === 'house_initial'){
      return(
        <div id={animationID} style={{display:'flex', flexDirection:'row-reverse', height:'100%', width:`${props.heightPercentage+'%'}`, justifyContent:'flex-end', gap:'40px', maxHeight:'160px', transition: 'max-width 2s ease-in-out',}}>
          <div id='bar-container' style={{backgroundColor:`${props.pos % 2 == 0? houseColor : darkColor}`, height:'100%', width:'100%', display:'flex', flexDirection:'row', justifyContent:'flex-end', overflow:'hidden', borderRadius:'0px 100px 100px 0px', maxHeight:'160px'}}>
            <div id='bar-content-container' style={{display:'flex', flexDirection:'row', justifyContent:'space-between', flexShrink: '0', padding: '10px 10px', alignItems:'space-between', width:'100%'}}>
              <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', justifySelf:'flex-start', boxSizing:'border-box', paddingLeft:'40px', flexShrink:'120', overflow:'hidden', alignSelf:'center'}}>
                <span style={{fontSize:'75px', fontWeight:'700', textAlign:'center', color:'white', width:'fit-content', textShadow:'-1px 2px #0000003b'}}>{props.house.houseTotal.toLocaleString()}</span>
              </div>
              <div id='circle-saint-image' style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%', maxHeight:'160px', maxWidth:'140px', aspectRatio:'1/1', borderRadius:'200px', backgroundColor:`${props.pos % 2 == 0? darkColor : houseColor}`, margin:'auto 0', flexShrink: '0', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center', flexGrow:'1'}}>
                  <span style={{fontSize:'55px', fontWeight:'bold', color:'white', textShadow:'-1px 2px #0000003b', opacity:'0.75'}}>
                    Y{props.house.studentYear}
                  </span>
              </div>
            </div>
          </div>
        </div>
      )
    }else{
      return(
        <div id={animationID} style={{display:'flex', flexDirection:'row-reverse', height:'100%', width:`${props.heightPercentage+'%'}`, justifyContent:'flex-end', gap:'40px', maxHeight:'160px', transition: 'max-width 2s ease-in-out',}}>
          <div id='bar-container' style={{backgroundColor:`${houseColor}`, height:'100%', width:'100%', display:'flex', flexDirection:'row', justifyContent:'flex-end', overflow:'hidden', borderRadius:'0px 100px 100px 0px', maxHeight:'160px'}}>
            <div id='bar-content-container' style={{display:'flex', flexDirection:'row', justifyContent:'space-between', flexShrink: '0', padding: '10px 10px', alignItems:'space-between', width:'100%'}}>
              <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', justifySelf:'flex-start', boxSizing:'border-box', paddingLeft:'40px', flexShrink:'120', overflow:'hidden', alignSelf:'center'}}>
                  <span style={{fontWeight:'700', fontSize:'40px', color:'white', textTransform:'uppercase', textShadow:'-1px 2px #0000003b', opacity:'0.6'}}>{props.house.houseDescription}</span>
                <span style={{fontSize:'55px', fontWeight:'700', textAlign:'center', color:'white', width:'fit-content'}}>{props.house.houseTotal.toLocaleString()}</span>
              </div>
              <div id='circle-saint-image' style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%', maxHeight:'160px', maxWidth:'140px', aspectRatio:'1/1', borderRadius:'200px', backgroundColor:`${houseColor}`, margin:'auto 0', flexShrink: '0', backgroundImage:`url(${props.house.houseSaintPhoto})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center', filter:'grayscale(100%)', flexGrow:'1'}}>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  else{
    return(
      <animated.div style={{ display:'flex', flexDirection:'column', height:`${props.heightPercentage+'%'}`, width:'100%', justifyContent:'flex-end'}}>
        <div style={{display:'flex', width:'120px', height:'120px', borderRadius:'200px', backgroundColor:`${props.house.houseColor}`, margin:'0 auto', flexShrink: '0', backgroundImage:`url(${props.house.houseSaintPhoto})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center', filter:'grayscale(100%)'}}>
        </div>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center',flexShrink: '0'}}>  
          <span style={{fontSize:'40px', fontWeight:'600', textAlign:'center', color:'white'}}>{props.house.houseTotal.toLocaleString()}</span>
        </div>
        <div style={{backgroundColor:`${props.house.houseColor}`, height:'100%', width:'100%'}}></div>
        <div style={{display:'flex', height:'150px', width:'100%', justifyContent:'center', alignItems:'center', flexShrink: '0', backgroundColor:`${props.house.houseColor}`}}>
          <span style={{transform: 'rotate(270deg)', fontWeight:'600', fontSize:'30px', color:'white'}}>{props.house.houseDescription}</span>
        </div> 
      </animated.div>
    )
  }
}
export default Bar