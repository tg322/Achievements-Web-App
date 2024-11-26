import * as React from 'react';
import { IHouseProps } from '../../IHouseInterfaces';
import Bar from './Bar';
import bg from '../../img/HouseTotalsBackground.png';
import { Container, ISourceOptions, MoveDirection, OutMode } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { useEffect, useMemo, useState } from 'react';
import { loadFull } from "tsparticles"
import { useGraphContext } from '../../Utils/GraphContextProvider';

interface IHouseTotalsProps{
    maxRounded: number;
}

function HouseTotals(props:IHouseTotalsProps){

    const{graphState} = useGraphContext();

    useEffect(() => {
        initParticlesEngine(async (engine) => {
          await loadFull(engine);
        }).then(() => {
          console.log('loadALL successful')
        }).catch((error) => {
          console.error("Error initializing particles engine: ", error);
        });
      }, []);
  
    const particlesLoaded = async (container?: Container): Promise<void> => {
    };
    
    const options: ISourceOptions = useMemo(
      () => ({
        "autoPlay": true,
        "background": {
          "color": {
            "value": ""
          },
        },
        "fullScreen": {
          "enable": true,
          "zIndex": -1
        },
        "detectRetina": true,
        "fpsLimit": 60,
        "particles": {
          "number": {
            "value": 40,
            "density": {
              "enable": true,
              "area": 800
            }
          },
          "color": {
            "value": ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"]
          },
          "shape": {
            "type": "square"
          },
          "opacity": {
            "value": 0.8,
            "random": true
          },
          "size": {
            "value": {
              "min": 10,
              "max": 20
            },
            "random": true
          },
          "move": {
            "enable": true,
            "speed": 10,
            "direction": "bottom",
            "outModes": {
              "default": "destroy"
            },
            "straight": false,
            "gravity": {
              "enable": true,
              "acceleration": 4,
              "inverse": false,
              "maxSpeed": 10
            }
          },
          "tilt": {
            "enable": true,
            "value": {
              "min": -45,
              "max": 45
            },
            "animation": {
              "enable": true,
              "speed": 1,
              "sync": false
            }
          }
        },
        "emitters": {
          "direction": "bottom",
          "rate": {
            "quantity": 3,
            "delay": 0.5
          },
          "life": {
            "duration": 0,
            "count": 0
          },
          "size": {
            "width": 100,
            "height": 0
          },
          "position": {
            "x": 50,
            "y": 0
          }
        }
      }),
      [],
    );

    if(graphState.GraphSettings.type === 'house'){
      if(graphState.GraphSettings.dataType &&
        graphState.GraphSettings.dataType.type === 'student_year'){
            return(
              <div style={{display:'flex', width:'100%', height:'100vh', boxSizing:'border-box', flexDirection:'column', backgroundImage:`url(${bg})`, position:'relative', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center', justifyContent:'space-between'}}>
    
                  <div style={{display:'flex', position:'absolute', width:'100%', height:'100%', backgroundColor:'black', opacity:'0.4', zIndex:'1', top:'0', left:'0'}}></div>
      
                  <div style={{display:'flex', flexDirection:'column', backgroundColor:'#410541', zIndex:'4', padding:'30px 0px 20px 0px', color:'white'}}>
                      <h2 style={{fontSize:'40px', margin:'0px', textAlign:'center', fontFamily: 'Bebas Neue", sans-serif', fontWeight:'600', letterSpacing:'4px' }}>GREAT WORK</h2>
                      <h1 style={{fontSize:'100px', margin:'0px', textAlign:'center', fontFamily: '"Bebas Neue", sans-serif', fontWeight:'600', letterSpacing:'12px'}}>YEAR {graphState.GraphSettings.dataType.value}</h1>
                  </div>
                  <div style={{display:'flex', flexDirection:'column', height:'fit-content', gap:'30px', alignItems:'flex-start', zIndex:'4', justifyContent:'center', padding:'0px 30px 0px 0px'}}>
                      {graphState.GraphSettings.data && props.maxRounded && graphState.GraphSettings.data.map((singleHouse, key) => {
                          let heightPercentage = singleHouse.houseTotal / props.maxRounded * 100;
                          if(heightPercentage < 35){
                              heightPercentage = 35.5;
                          }
                          return(
                              <Bar key={key} house={singleHouse} heightPercentage={heightPercentage} pos={key}/>
                          )
                      })
                      }
                  </div>
                  
                  <div style={{display:'flex', flexDirection:'column', backgroundColor:'#410541', zIndex:'4', padding:'30px 0px 20px 0px', color:'white'}}>
                      <h2 style={{fontSize:'40px', margin:'0px', textAlign:'center', fontFamily: '"Bebas Neue", sans-serif', fontWeight:'600', letterSpacing:'4px' }}>GREAT WORK</h2>
                      <h1 style={{fontSize:'100px', margin:'0px', textAlign:'center', fontFamily: '"Bebas Neue", sans-serif', fontWeight:'600', letterSpacing:'12px'}}>YEAR {graphState.GraphSettings.dataType.value}</h1>
                  </div>
              </div> 
          );
        }else{
            return(
                <div style={{display:'flex', width:'100%', height:'100vh', boxSizing:'border-box', flexDirection:'column', backgroundImage:`url(${bg})`, position:'relative', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center', justifyContent:'space-between', padding:'117px 0px 0px 0px'}}>
                    <Particles
                        id="tsparticles"
                        particlesLoaded={particlesLoaded}
                        
                        options={options}
                        style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            top: "0",
                            left: "0"
                        }}
                    />
                    <div style={{display:'flex', position:'absolute', width:'100%', height:'100%', backgroundColor:'black', opacity:'0.4', zIndex:'1', top:'0', left:'0'}}></div>
        
                    <div style={{display:'flex', flexDirection:'column', height:'fit-content', gap:'30px', alignItems:'flex-start', zIndex:'4', justifyContent:'center', padding:'0px 30px 0px 0px'}}>
                        {graphState.GraphSettings.data && props.maxRounded && graphState.GraphSettings.data.map((singleHouse, key) => {
                            let heightPercentage = singleHouse.houseTotal / props.maxRounded * 100;
                            if(heightPercentage < 35){
                                heightPercentage = 35.5;
                            }
                            return(
                                <Bar key={key} house={singleHouse} heightPercentage={heightPercentage} pos={key}/>
                            )
                        })
                        }
                    </div>
                    
                    <div style={{display:'flex', flexDirection:'column', zIndex:'4', padding:'30px 0px 100px 0px', color:'white'}}>
                        <h1 style={{fontSize:'200px', margin:'0px', textAlign:'center', fontFamily: '"Bebas Neue", sans-serif', fontWeight:'600', letterSpacing:'4px' }}>HOUSE POWER</h1>
                        <h2 style={{fontSize:'40px', margin:'0px', textAlign:'center', fontFamily: '"Bebas Neue", sans-serif', fontWeight:'600', letterSpacing:'12px'}}>CELEBRATING OUR COLLECTIVE WINS</h2>
                    </div>
                </div> 
            );
        }
    }else{
      return(<></>);
    }
    
}
export default HouseTotals
