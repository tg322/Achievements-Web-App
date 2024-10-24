import * as React from 'react';
import { IHouseProps } from '../../IHouseInterfaces';
import Bar from './Bar';
import bg from '../../img/HouseTotalsBackground.png';

interface IHouseTotalsProps{
    houses: Array<IHouseProps>;
    maxRounded: number;
    year?:number;
}

function HouseTotals(props:IHouseTotalsProps){

    return(
        <div style={{display:'flex', width:'100%', height:'100vh', boxSizing:'border-box', flexDirection:'column', backgroundImage:`url(${bg})`, position:'relative', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center', justifyContent:'space-between'}}>
            <div style={{display:'flex', position:'absolute', width:'100%', height:'100%', backgroundColor:'black', opacity:'0.4', zIndex:'1', top:'0', left:'0'}}></div>

            {props.year && <div style={{display:'flex', flexDirection:'column', backgroundColor:'#410541', zIndex:'4', padding:'30px 0px 20px 0px', color:'white'}}>
                <h2 style={{fontSize:'40px', margin:'0px', textAlign:'center', fontFamily: '"Bebas Neue", sans-serif', fontWeight:'600', letterSpacing:'4px' }}>GREAT WORK</h2>
                <h1 style={{fontSize:'100px', margin:'0px', textAlign:'center', fontFamily: '"Bebas Neue", sans-serif', fontWeight:'600', letterSpacing:'12px'}}>YEAR {props.year}</h1>
            </div>}
            {!props.year && <div style={{display:'flex', flexDirection:'column', backgroundColor:'#410541', zIndex:'4', padding:'30px 0px 20px 0px', color:'white'}}>
                <h2 style={{fontSize:'40px', margin:'0px', textAlign:'center', fontFamily: '"Bebas Neue", sans-serif', fontWeight:'600', letterSpacing:'4px' }}>CELEBRATING ACHIEVEMENT</h2>
                <h1 style={{fontSize:'100px', margin:'0px', textAlign:'center', fontFamily: '"Bebas Neue", sans-serif', fontWeight:'600', letterSpacing:'12px'}}>ALL HOUSES</h1>
            </div>}

            <div style={{display:'flex', flexDirection:'column', height:'fit-content', gap:'30px', alignItems:'flex-start', zIndex:'4', justifyContent:'center', padding:'0px 10px 0px 0px'}}>
                {props.houses && props.maxRounded && props.houses.map((singleHouse, key) => {
                    let heightPercentage = singleHouse.houseTotal / props.maxRounded * 100;
                    if(heightPercentage < 35){
                        heightPercentage = 35.5;
                    }
                    return(
                        <Bar key={key} house={singleHouse} heightPercentage={heightPercentage} pos={key} direction={'horizontal'} singleHouse={false}/>
                    )
                })
                }
            </div>
            
            {props.year && <div style={{display:'flex', flexDirection:'column', backgroundColor:'#410541', zIndex:'4', padding:'30px 0px 20px 0px', color:'white'}}>
                <h2 style={{fontSize:'40px', margin:'0px', textAlign:'center', fontFamily: '"Bebas Neue", sans-serif', fontWeight:'600', letterSpacing:'4px' }}>GREAT WORK</h2>
                <h1 style={{fontSize:'100px', margin:'0px', textAlign:'center', fontFamily: '"Bebas Neue", sans-serif', fontWeight:'600', letterSpacing:'12px'}}>YEAR {props.year}</h1>
            </div>}
            {!props.year && <div style={{display:'flex', flexDirection:'column', backgroundColor:'#410541', zIndex:'4', padding:'30px 0px 20px 0px', color:'white'}}>
                <h2 style={{fontSize:'40px', margin:'0px', textAlign:'center', fontFamily: '"Bebas Neue", sans-serif', fontWeight:'600', letterSpacing:'4px' }}>CELEBRATING ACHIEVEMENT</h2>
                <h1 style={{fontSize:'100px', margin:'0px', textAlign:'center', fontFamily: '"Bebas Neue", sans-serif', fontWeight:'600', letterSpacing:'12px'}}>ALL HOUSES</h1>
            </div>}
            {/* <div style={{display:'flex', width:'100%', zIndex:'4', justifyContent:'center', flexDirection:'column', padding:'20px 0px 20px 40px', boxSizing:'border-box'}}>
                { props.year && <h1 style={{color:'white', fontSize:'70px', fontFamily: '"Courgette", cursive', textAlign:'center', margin:'0px'}}>Year {props.year}</h1>}
                {!props.year && <h1 style={{color:'white', fontSize:'70px', fontFamily: '"Courgette", cursive', textAlign:'center', margin:'0px'}}>House Totals</h1>}
            </div> */}
        </div> 
    );
}
export default HouseTotals