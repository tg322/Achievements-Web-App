import { House, IHouseProps } from "./IHouseInterfaces";
import { buildResponse, BuildResponseType } from "./BuildResponse";
import stBosco from './img/john_bosco.png';
import stTeresa from './img/mother_teresa.png';
import stRomero from './img/oscar_romero.png';
import stMacKillop from './img/mary_mackillop.png';
import stNewman from './img/john_henry_newman.png';
import stStein from './img/edith_stein.png';

interface IHouseSaintsProps{
    houseName:string;
    saintImage:string;
}

export class Helper {

    async fetchBlobs(imageUrl:string){
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        return blob;
    }
    
    async buildHouses(rawData:any): Promise<BuildResponseType>{
        let housesArray:IHouseProps[] = [];
        const houseSaints:Array<IHouseSaintsProps> = 
            [{houseName: 'Athens', saintImage:stBosco}, 
            {houseName: 'Lystra', saintImage:stNewman}, 
            {houseName: 'Damascus', saintImage:stStein}, 
            {houseName: 'Corinth', saintImage:stMacKillop},
            {houseName: 'Valletta', saintImage:stTeresa},
            {houseName: 'Rome', saintImage:stRomero}];
            // const testPoints = [12900, 7000, 8600, 6300, 5000, 2000];

        for (const key of Object.keys(rawData)) {
            const singleItem = rawData[Number(key)];
            const houseSaint = houseSaints.filter((saint:IHouseSaintsProps) => saint.houseName === singleItem.house_description);
            const saintBlob = await this.fetchBlobs(houseSaint[0].saintImage);
            const saintImage = URL.createObjectURL(saintBlob);
            housesArray.push(new House(singleItem.house_id, singleItem.house_description, singleItem.house_color, singleItem.house_total, singleItem.student_year, singleItem.house_place_asc, singleItem.house_place_desc, saintImage));
        }
        return buildResponse(true, 'Houses built successfully.', housesArray);
    }
}