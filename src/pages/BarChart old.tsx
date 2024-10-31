// import * as React from 'react';
// import './BarCharts.css';
// import { useLocation } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import Bar from './components/Bar';
// import axios from 'axios';
// import { Direction, IHouseProps } from '../IHouseInterfaces';
// import { Helper } from '../Helpers';
// import bg from '../img/graph_background_image.png';
// import corinth from '../img/john_bosco.png'

// function BarChart(){

//     //Absolutely none of this is good enough, everything is rushed and confusing.
//     //Why is the structure not obvious as to what orientation it is using?
//     //Why is there conditional display being used for simple JSX
//     //This all seems like a jenga tower waiting to collapse, it is confusing, verbose, too dynamic to the point it makes no sense as to what it is doing, too reliant on hard coding, overall a terrible implementation. 
//     //This must be re-written with more care and consideration of the key requirements.


//     const[orientation, setOrientation] = useState<Direction>();
//     const[houses, setHouses] = useState<Array<IHouseProps>>([]);
//     const[year,setYear] = useState<boolean>(false);
//     const[house, setHouse] = useState<string>('')
//     const[maxRounded, setMaxRounded] = useState<number>(0);

//     const urlLocation = useLocation();
//     const queryParameters = new URLSearchParams(window.location.search);
//     const helper = new Helper();
    
//     function determineOrientation(){
//         if(urlLocation.pathname.includes('vertical')){
//             setOrientation('vertical');
//         }else if(urlLocation.pathname.includes('horizontal')){
//             setOrientation('horizontal');
//         }
//     }

//     function fetchAll(){
//         axios.get('https://spccapi.stpaulscatholiccollege.co.uk/houses')
//             .then(async function (response) {
//                 // handle success - Store data in useStates
//                 const builtHouses = await helper.buildHouses(response.data);
//                 setHouses(builtHouses.data);
//             })
//             .catch(function (error) {
//                 // handle error
//                 console.log(error);
//             })
//     }

//     function fetchHouseTotals(house:string){
//         if(!house){
//             throw new Error('No house param provided.');
//         }
//         axios.get(`https://spccapi.stpaulscatholiccollege.co.uk/houses?house_initial=${house.charAt(0)}`)
//         .then(async function (response) {
//             // handle success - Store data in useStates
//             const builtHouses = await helper.buildHouses(response.data);
//             setHouses(builtHouses.data);
//             console.log(builtHouses.data);
//         })
//         .catch(function (error) {
//             // handle error
//             console.log(error);
//         })
//     }

//     function fetchYearTotals(year:number){
//         if(!year){
//             throw new Error('No year param provided.');
//         }
//         axios.get(`https://spccapi.stpaulscatholiccollege.co.uk/houses?student_year=${year}`)
//         .then(async function (response) {
//             // handle success - Store data in useStates
//             const builtHouses = await helper.buildHouses(response.data);
//             setHouses(builtHouses.data);
//         })
//         .catch(function (error) {
//             // handle error
//             console.log(error);
//         })
//     }

//     function filterArray(){
//         if(!houses){
//             return false
//         }

//         const maxTotal = Math.max(...houses.map(item => item.houseTotal));

//         let maxRounded = 0;

//         maxRounded = Math.ceil(maxTotal / 10) * 10;

//         console.log(maxRounded);

//         setMaxRounded(maxRounded);
//     }

//     useEffect(()=>{
//         determineOrientation();
//     }, []);

//     useEffect(()=>{
//         //change to promise
//         const year = queryParameters.get("year");
//         const house = queryParameters.get("house");

//         if(year && house){
//             throw new Error('Cant have both.');
//         }else{
//             if(year){
//                 fetchYearTotals(Number(year))
//             }else if(house){
//                 fetchHouseTotals(house);
//                 setYear(true);
//                 setHouse(house);
//             }else{
//                 fetchAll();
//             }
//         }
//     }, []);

//     useEffect(()=>{
//         filterArray();
//     }, [houses]);

//     return(

//     <div style={{display:'flex', width:'100%', height:'100vh', padding:'40px 40px 40px 0px', boxSizing:'border-box', flexDirection:'column', backgroundImage:`url(${corinth})`, position:'relative', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center', justifyContent:'space-evenly'}}>
//             <div style={{display:'flex', position:'absolute', width:'100%', height:'100%', backdropFilter:'blur(8px)', zIndex:'1', top:'0', left:'0'}}></div>
//             <div style={{display:'flex', position:'absolute', width:'100%', height:'100%', backgroundColor:'black', opacity:'0.4', zIndex:'1', top:'0', left:'0'}}></div>
//             <div style={{display:'flex', width:'100%', zIndex:'4', justifyContent:'center', flexDirection:'column', padding:'0px 0px 0px 40px'}}>
//                 <h1 style={{color:'white', fontSize:'50px', fontFamily: '"Courgette", cursive', margin:'0px', textAlign:'center'}}>Celebrating Achievement</h1>
//                 {year &&
//                     <h2 style={{textTransform:'capitalize', color:'white', textAlign:'center'}}>{house} House Points</h2>
//                 }
//             </div>
//             <div style={{display:'flex', flexDirection:'column', height:'fit-content', gap:'30px', alignItems:'flex-start', zIndex:'4', justifyContent:'center'}}>
//                 {houses && maxRounded && houses.map((singleHouse, key) => {
//                     let heightPercentage = singleHouse.houseTotal / maxRounded * 100;
//                     if(heightPercentage < 35){
//                         heightPercentage = 35.5;
//                     }
//                     return(
//                         <Bar key={key} house={singleHouse} heightPercentage={heightPercentage} pos={key} direction={orientation? orientation : 'horizontal'} singleHouse={year}/>
//                     )
//                 })
//                 }
//             </div>
//         </div>
//     );
// }
// export default BarChart