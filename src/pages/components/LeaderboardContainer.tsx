import axios from 'axios';
import * as React from 'react';
import { Helper } from '../../Helpers';
import { IHouseProps } from '../../IHouseInterfaces';
import { useEffect, useState } from 'react';
import longJump from '../../img/student-doing-long-jump.png';
import studentsIpad from '../../img/year-10-on-ipads.png';
import LeaderboardItem from './LeaderboardItem';

function LeaderboardContainer(){
    const[houses, setHouses] = useState<Array<IHouseProps>>([]);
    
    const helper = new Helper();

    function fetchAll(){
        axios.get('https://achievements-api.stpaulscatholiccollege.co.uk/houses')
            .then(async function (response) {
                // handle success - Store data in useStates
                const builtHouses = await helper.buildHouses(response.data);
                const unfilteredHouses:Array<IHouseProps> = builtHouses.data;
                const filteredHouses = unfilteredHouses
                .filter(item => item.housePlaceAsc != null)
                .sort((a, b) => a.housePlaceAsc - b.housePlaceAsc);
                setHouses(filteredHouses);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    useEffect(()=>{
        fetchAll();
    },[])

    return(
        <div id='container' style={{display:'flex', flexDirection:'row', width:'100%', height:'100vh'}}>
            <div id='imagesContainer' style={{display:'flex', flexDirection:'column', width:'60%', height:'100%', position:'relative'}}>
                <h1 style={{position:'absolute', top:'calc(50% - 133px)', left:'calc(50% - 270px)', margin:'0px', fontSize:'100px', textAlign:'center', width:'540px', transform: 'rotate(350deg)', fontFamily: '"Courgette", cursive', textShadow:'-1px 2px black', color:'white'}}>Great Work Year 10</h1>

                <div id='image1' style={{display:'flex', width:'100%', height:'100%', backgroundImage:`url(${longJump})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}}></div>
                
                <div id='image1' style={{display:'flex', width:'100%', height:'100%', backgroundImage:`url(${studentsIpad})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}}></div>

            </div>
            <div id='leaderboardContainer' style={{display:'flex', flexDirection:'column', width:'40%', height:'100%'}}>
                {houses && houses.map((singleHouse, key) => {
                        return(
                            <LeaderboardItem key={key} house={singleHouse}/>
                        )
                    })
                }
            </div>
        </div>
    );

}

export default LeaderboardContainer