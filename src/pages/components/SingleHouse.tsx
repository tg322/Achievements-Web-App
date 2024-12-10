import * as React from 'react';
import Bar from './Bar';
import { useGraphContext } from '../../Utils/GraphContextProvider';
import { Navigate } from 'react-router-dom';

interface SingleHouseProps{
    maxRounded:number;
}

function SingleHouse(props:SingleHouseProps){

    const {graphState} = useGraphContext();

    
    if(graphState.GraphSettings.type === 'house'){
        const houses = graphState.GraphSettings.data;
        const singleHouse = graphState.GraphSettings.data[0];
        const orientation = graphState.GraphSettings.orientation;
        const houseTotal = graphState.GraphSettings.data.reduce((acc, curr) => acc + curr.houseTotal, 0);
    return(
        <div style={{display:'flex', width:'100%', height:'100vh', boxSizing:'border-box', flexDirection:'column', backgroundImage:`url(${graphState.GraphSettings.bgImage? graphState.GraphSettings.bgImage : singleHouse.houseSaintPhoto})`, position:'relative', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center', justifyContent:'space-between', gap:'30px'}}>
        <div style={{display:'flex', position:'absolute', width:'100%', height:'100%', backgroundColor:`rgb(${singleHouse.darkerHouseColor.r}, ${singleHouse.darkerHouseColor.g},${singleHouse.darkerHouseColor.b})`, opacity:'0.2', zIndex:'1', top:'0', left:'0'}}></div>
        <div style={{display:'flex', flexDirection:'column', backgroundColor:`rgba(${singleHouse.houseColor?.r}, ${singleHouse.houseColor?.g}, ${singleHouse.houseColor?.b}, 0.6)`, zIndex:'4', padding:'40px 0px 40px 0px'}}>
            <h2 style={{fontSize:'80px', margin:'0px', textAlign:'center', fontFamily: '"Bebas Neue", sans-serif', fontWeight:'600', letterSpacing:'4px' }}>GREAT WORK</h2>
            <h1 style={{fontSize:'180px', margin:'0px', textAlign:'center', fontFamily: '"Bebas Neue", sans-serif', fontWeight:'600', letterSpacing:'12px', lineHeight:'0.8'}}>{singleHouse.houseDescription.toUpperCase()}</h1>
        </div>
        <div style={{display:'flex', flexDirection:'column', height:'fit-content', gap:'30px', alignItems:'flex-start', zIndex:'4', justifyContent:'center', padding:'0px 30px 0px 0px'}}>
            {houses && props.maxRounded && houses.map((singleHouse, key) => {
                let heightPercentage = singleHouse.houseTotal / props.maxRounded * 100;
                if(heightPercentage < 35){
                    heightPercentage = 35.5;
                }
                return(
                    <Bar key={key} house={singleHouse} heightPercentage={heightPercentage} pos={key}/>
                )
            })}
        </div>
        <div style={{display:'flex', flexDirection:'column', backgroundColor:`rgba(${singleHouse.houseColor?.r}, ${singleHouse.houseColor?.g}, ${singleHouse.houseColor?.b}, 0.6)`, zIndex:'4', padding:'40px 0px 40px 0px'}}>
            <h2 style={{fontSize:'80px', margin:'0px', textAlign:'center', fontFamily: '"Bebas Neue", sans-serif', fontWeight:'600', letterSpacing:'4px' }}>HOUSE TOTAL</h2>
            <h1 style={{fontSize:'150px', margin:'0px', textAlign:'center', fontFamily: '"Bebas Neue", sans-serif', fontWeight:'600', lineHeight:'0.8'}}>{houseTotal}</h1>
        </div>
    </div>
    );
    }else{
        return(<Navigate to={'/'}/>);
    }
}
export default React.memo(SingleHouse)