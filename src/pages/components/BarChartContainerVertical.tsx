import * as React from 'react';
import { useEffect, useState } from 'react';
import { houseSaints, IHouseProps, IHouseSaintsProps } from '../../IHouseInterfaces';
import { Helper } from '../../Helpers';
import axios from 'axios';
import Bar from './Bar';
import bg from '../../img/graph_background_image.png';
import '../BarCharts.css';

function BarChartContainerVertical(){

    const[houses, setHouses] = useState<Array<IHouseProps>>([]);
    const[isSingleHouse, setIsSingleHouse] = useState<boolean>(false);
    const[singleHouseName, setSingleHouseName] = useState<string>();
    const[maxRounded, setMaxRounded] = useState<number>(0);
    const[singleHouseImage, setSingleHouseImage] = useState<string>('');

    const queryParameters = new URLSearchParams(window.location.search);
    const helper = new Helper();

    function fetchAll(){
        axios.get('https://achievements-api.stpaulscatholiccollege.co.uk/houses')
            .then(async function (response) {
                // handle success - Store data in useStates
                const builtHouses = await helper.buildHouses(response.data);
                setHouses(builtHouses.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    function fetchHouseTotals(house:string){
        if(!house){
            throw new Error('No house param provided.');
        }
        axios.get(`https://achievements-api.stpaulscatholiccollege.co.uk/houses?house_initial=${house.charAt(0)}`)
        .then(async function (response) {
            // handle success - Store data in useStates
            const builtHouses = await helper.buildHouses(response.data);
            setHouses(builtHouses.data);
            console.log(builtHouses.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    function fetchYearTotals(year:number){
        if(!year){
            throw new Error('No year param provided.');
        }
        axios.get(`https://achievements-api.stpaulscatholiccollege.co.uk/houses?student_year=${year}`)
        .then(async function (response) {
            // handle success - Store data in useStates
            const builtHouses = await helper.buildHouses(response.data);
            setHouses(builtHouses.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    function filterArray(){
        if(!houses){
            return false
        }

        const maxTotal = Math.max(...houses.map(item => item.houseTotal));

        let maxRounded = 0;

        maxRounded = Math.ceil(maxTotal / 10) * 10;

        console.log(maxRounded);

        setMaxRounded(maxRounded);
    }

    useEffect(()=>{
        //change to promise
        const year = queryParameters.get("year");
        const house = queryParameters.get("house");

        if(year && house){
            throw new Error('Cant have both.');
        }else{
            if(year){
                fetchYearTotals(Number(year))
            }else if(house){
                setIsSingleHouse(true);
                setSingleHouseName(house.toUpperCase());
                fetchHouseTotals(house);
            }else{
                fetchAll();
            }
        }
    }, []);

    async function setHouseImage(){
        const singleHouse = houseSaints.filter((saint:IHouseSaintsProps) => saint.houseName === singleHouseName);
        const saintBlob = await helper.fetchBlobs(singleHouse[0].saintImage);
        const saintImage = URL.createObjectURL(saintBlob);
        setSingleHouseImage(saintImage);
    }

    useEffect(() => {
        if (houses.length > 0) {
            console.log('Houses updated:', houses);
            filterArray();
            if (isSingleHouse) {
                setHouseImage();
            }
        }
    }, [houses]);

    useEffect(()=>{
        console.log(singleHouseImage);
    },[singleHouseImage])

    return(
        <div style={{display:'flex', width:'100%', height:'100vh', padding:'40px 40px 40px 0px', boxSizing:'border-box', flexDirection:'column', backgroundImage:`url(${isSingleHouse? singleHouseImage: bg})`, position:'relative', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center', justifyContent:'space-evenly'}}>
            <div style={{display:'flex', position:'absolute', width:'100%', height:'100%', backdropFilter:'blur(8px)', zIndex:'1', top:'0', left:'0'}}></div>
            <div style={{display:'flex', position:'absolute', width:'100%', height:'100%', backgroundColor:'black', opacity:'0.4', zIndex:'1', top:'0', left:'0'}}></div>
            <div style={{display:'flex', width:'100%', zIndex:'4', justifyContent:'center', flexDirection:'column', padding:'0px 0px 0px 40px'}}>
                <h1 style={{color:'white', fontSize:'50px', fontFamily: '"Courgette", cursive', margin:'0px', textAlign:'center'}}>Celebrating Achievement</h1>
                {isSingleHouse &&
                    <h2 style={{textTransform:'capitalize', color:'white', textAlign:'center'}}>{singleHouseName} House Points</h2>
                }
            </div>
            <div style={{display:'flex', flexDirection:'column', height:'fit-content', gap:'30px', alignItems:'flex-start', zIndex:'4', justifyContent:'center'}}>
                {houses && maxRounded && houses.map((singleHouse, key) => {
                    let heightPercentage = singleHouse.houseTotal / maxRounded * 100;
                    if(heightPercentage < 35){
                        heightPercentage = 35.5;
                    }
                    return(
                        <Bar key={key} house={singleHouse} heightPercentage={heightPercentage} pos={key} direction={'vertical'} singleHouse={isSingleHouse}/>
                    )
                })
                }
            </div>
        </div> 
    );
}

export default BarChartContainerVertical