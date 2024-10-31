// import axios from 'axios';
// import * as React from 'react';
// import { useEffect, useState } from 'react';
// import { HouseDetails, houseDetailsProps, houseSaints, IHouseProps, IHouseSaintsProps } from '../../IHouseInterfaces';
// import { Helper } from '../../Helpers';
// import Bar from './Bar';
// import bg from '../../img/graph_background_image.png';
// import SingleHouse from './SingleHouse';
// import HouseTotals from './HouseTotals';
// import { ApiEndpoints } from '../../Utils/ApiEndpoints';

// function BarChartContainerHorizontal(){
//     const[houses, setHouses] = useState<Array<IHouseProps>>([]);
//     const[isSingleHouse, setIsSingleHouse] = useState<boolean | null>(null);
//     const[singleHouseName, setSingleHouseName] = useState<string>();
//     const[maxRounded, setMaxRounded] = useState<number>(0);
//     const[backgroundImage, setBackgroundImage] = useState<string>('');
//     const[houseDetails, setHouseDetails] = useState<houseDetailsProps | null>(null);
//     const[isYear, setIsYear] = useState<number | null>(null);
//     const[interval, setInterval] = useState<number>(30000);

//     // const queryParameters = new URLSearchParams(window.location.search);
//     const helper = new Helper();
//     const apiEndpoints = new ApiEndpoints();

//     function fetchAll(){
//         axios.get('https://achievements-api.stpaulscatholiccollege.co.uk/houses')
//             .then(async function (response) {
//                 // handle success - Store data in useStates
//                 const builtHouses = await helper.buildHouses(response.data);
//                 setHouses(builtHouses.data);
//                 setBackgroundImage(bg);
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
//         axios.get(`https://achievements-api.stpaulscatholiccollege.co.uk/houses?house_initial=${house.charAt(0)}`)
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
//         axios.get(`https://achievements-api.stpaulscatholiccollege.co.uk/houses?student_year=${year}`)
//         .then(async function (response) {
//             // handle success - Store data in useStates
//             const builtHouses = await helper.buildHouses(response.data);
//             setHouses(builtHouses.data);
//             setBackgroundImage(bg);
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

//     // async function fetchData(){
//     //     if(year && house){
//     //         throw new Error('Cant have both.');
//     //     }else{
//     //         if(year){
                
//     //             const builtHouses = await helper.buildHouses(response.data);
//     //             setHouses(builtHouses.data);
//     //             setBackgroundImage(bg);

//     //             fetchYearTotals(Number(year));
//     //             setIsSingleHouse(false);
//     //             setIsYear(Number(year));
//     //         }else if(house){
//     //             setIsSingleHouse(true);
//     //             let capitalisedHouse = house.charAt(0).toUpperCase() + house.slice(1);
//     //             setSingleHouseName(capitalisedHouse);
//     //             fetchHouseTotals(house);
//     //         }else{
//     //             const response = await apiEndpoints.fetchAll();
//     //             const builtHouses = await helper.buildHouses(response.data);
//     //             setHouses(builtHouses.data);
//     //             setBackgroundImage(bg);
//     //             setIsSingleHouse(false);
//     //         }
//     //     }
//     //     if(intervalParam){
//     //         console.log(intervalParam);
//     //         setInterval(Number(intervalParam)*1000);
//     //     }
//     // }

//     useEffect(()=>{
//         //change to promise
//         //change to use graphContext

//     }, []);

//     async function getHouseImage(){
//         const singleHouse = houseSaints.filter((saint:IHouseSaintsProps) => saint.houseName === singleHouseName);
//         console.log(singleHouse);
//         const saintBlob = await helper.fetchBlobs(singleHouse[0].saintImage);
//         const saintImage = URL.createObjectURL(saintBlob);
//         return saintImage
//     }

//     async function getHouseDetails(){
//         if(houses.length < 0){
//             return false
//         }

//         let houseImage = await getHouseImage();
//         if(!houseImage){
//             throw new Error('House Image was not supplied.');
//         }
//         let houseName = houses[0].houseDescription;
//         let houseColor = houses[0].houseColor;
//         let houseRGB =  helper.hexToRgb(houseColor);
//         let houseDarkerColour = helper.DarkerRGBColor(houseRGB, 20);

//         console.log('houseRGB',houseRGB,'darkerRGB', houseDarkerColour);
         
//         let houseDetails = new HouseDetails(houseImage, houseName, houseRGB, houseDarkerColour);

//         setHouseDetails(houseDetails);

//         console.log(houseDarkerColour);
        
//     }

//     useEffect(() => {
//         if (houses.length > 0) {
//             filterArray();
//             if (isSingleHouse) {
//                 getHouseDetails();
//             }
//         }
//     }, [houses]);

//     if(isSingleHouse){
//         return(
//             <SingleHouse houses={houses} houseDetails={houseDetails} maxRounded={maxRounded} interval={interval}/>
//         );
//     }else if(!isSingleHouse && isYear){
//         return(
//             <HouseTotals houses={houses} maxRounded={maxRounded} year={isYear} interval={interval}/>
//         );
//     }else{
//         return(
//             <HouseTotals houses={houses} maxRounded={maxRounded} interval={interval}/>
//         );
//     }

// }

// export default BarChartContainerHorizontal