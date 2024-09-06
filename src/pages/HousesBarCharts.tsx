import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IHouseProps } from '../IHouseInterfaces';
import { Helper } from '../Helpers';
import './BarCharts.css';
import Bar from './components/Bar';
import stPauls from '../img/stpaulsvector.svg' 
import bg from '../img/graph_background_image.png'

function HousesBarCharts(){

    const[houses, setHouses] = useState<Array<IHouseProps>>([]);
    const[maxRounded, setMaxRounded] = useState<number>(0);

    const helper = new Helper();

    function filterArray(){
        if(!houses){
            return false
        }
        const maxTotal = Math.max(...houses.map(item => item.houseTotal));

        let maxRounded = 0;

        if (maxTotal < 100) {
            maxRounded = Math.ceil(maxTotal / 10) * 10;
            if (maxRounded - maxTotal < 50) {
                maxRounded = Math.ceil((maxTotal + 50) / 10) * 10;
            }
            
        } else if (maxTotal >= 100 && maxTotal < 1000) {
            maxRounded = Math.ceil(maxTotal / 10) * 10;
            if (maxRounded - maxTotal < 50) {
                maxRounded = Math.ceil((maxTotal + 120) / 10) * 10;
            }
        } else if (maxTotal >= 1000) {
            maxRounded = Math.ceil(maxTotal / 100) * 100;

            //if the max rounded value is less than 200 above the max total value, then max rounded equals max total + 500 rounded to the nearest 10
            if (maxRounded - maxTotal < 200) {
                maxRounded = Math.ceil((maxTotal + 500) / 10) * 10;
            }
        }

        setMaxRounded(maxRounded);
    }

    useEffect(() => {
        filterArray();

    },[houses]);

    useEffect(() => {
        axios.get('https://spccapi.stpaulscatholiccollege.co.uk/houses')
        .then(async function (response) {
            // handle success - Store data in useStates
            const builtHouses = await helper.buildHouses(response.data);
            setHouses(builtHouses.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
      }, []);

    



    return(
        <div style={{display:'flex', width:'100%', height:'100vh', padding:'40px', boxSizing:'border-box', flexDirection:'column', backgroundImage:`url(${stPauls})`, position:'relative', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'bottom'}}>
            <div style={{display:'flex', position:'absolute', width:'100%', height:'100%', backdropFilter:'blur(8px)', zIndex:'1', top:'0', left:'0'}}></div>
            <div style={{display:'flex', position:'absolute', width:'100%', height:'100%', backgroundColor:'black', opacity:'0.4', zIndex:'1', top:'0', left:'0'}}></div>
            <div style={{display:'flex', flexDirection:'row', height:'100%', gap:'5%', alignItems:'flex-end', zIndex:'4'}}>
                {houses && maxRounded && houses.map((singleHouse, key) => {
                    let heightPercentage = singleHouse.houseTotal / maxRounded * 100;
                    return(
                        <Bar key={key} house={singleHouse} heightPercentage={heightPercentage} pos={key}/>
                    )})
                }
            </div>
        </div>
    );
}
export default HousesBarCharts