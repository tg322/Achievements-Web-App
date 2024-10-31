import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { HouseDetails, houseDetailsProps, houseSaints, IHouseProps, IHouseSaintsProps } from '../../IHouseInterfaces';
import { Helper } from '../../Helpers';
import Bar from './Bar';
import bg from '../../img/graph_background_image.png';
import SingleHouse from './SingleHouse';
import HouseTotals from './HouseTotals';
import { ApiEndpoints } from '../../Utils/ApiEndpoints';
import { useGraphContext } from '../../Utils/GraphContextProvider';

function BarChartContainerHorizontal(){
    const[maxRounded, setMaxRounded] = useState<number>(0);

    const helpers = new Helper();
    const {graphState, graphDispatch} = useGraphContext();
    console.log(graphState);
    //needed
    function filterArray(){
        
        const maxTotal = Math.max(...graphState.GraphSettings.data.map(item => item.houseTotal));

        let maxRounded = 0;

        maxRounded = Math.ceil(maxTotal / 10) * 10;

        console.log(maxRounded);

        setMaxRounded(maxRounded);
    }

    //need to think about this one
    // async function getHouseImage(){
    //     const singleHouse = houseSaints.filter((saint:IHouseSaintsProps) => saint.houseName === singleHouseName);
    //     console.log(singleHouse);
    //     const saintBlob = await helpers.fetchBlobs(singleHouse[0].saintImage);
    //     const saintImage = URL.createObjectURL(saintBlob);
    //     return saintImage
    // }

    //probably not needed
    // async function getHouseDetails(){
    //     if(houses.length < 0){
    //         return false
    //     }

    //     let houseImage = await getHouseImage();
    //     if(!houseImage){
    //         throw new Error('House Image was not supplied.');
    //     }

    //     let houseName = houses[0].houseDescription;
    //     let houseColor = houses[0].houseColor;
    //     let houseRGB =  helpers.hexToRgb(houseColor);
    //     let houseDarkerColour = helpers.DarkerRGBColor(houseRGB, 20);

    //     console.log('houseRGB',houseRGB,'darkerRGB', houseDarkerColour);
         
    //     let houseDetails = new HouseDetails(houseImage, houseName, houseRGB, houseDarkerColour);

    //     setHouseDetails(houseDetails);

    //     console.log(houseDarkerColour);
        
    // }

    useEffect(() => {
            filterArray();
    }, [graphState.GraphSettings.data]);

    if(graphState.GraphSettings.dataType.type === 'house'){
        return(
            <SingleHouse maxRounded={maxRounded}/>
        );
    }else if(graphState.GraphSettings.dataType.type === 'year'){
        return(
            <HouseTotals maxRounded={maxRounded}/>
        );
    }else{
        return(
            <HouseTotals maxRounded={maxRounded}/>
        );
    }

}

export default BarChartContainerHorizontal