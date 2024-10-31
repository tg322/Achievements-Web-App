import { House, IHouseProps, IHouseSaintsProps, RGBColorProps, houseSaints } from "./IHouseInterfaces";
import { buildResponse, BuildResponseType } from "./BuildResponse";
import stBosco from './img/john_bosco.png';
import stTeresa from './img/mother_teresa.png';
import stRomero from './img/oscar_romero.png';
import stMacKillop from './img/mary_mackillop.png';
import stNewman from './img/john_henry_newman.png';
import stStein from './img/edith_stein.png';



export class Helper {

    async fetchBlobs(imageUrl:string){
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        return blob;
    }
    
    async buildHouses(rawData:any): Promise<BuildResponseType>{
        let housesArray:IHouseProps[] = [];
        
            const testPoints = [0, 50, 40, 30, 20, 10];
                //
        for (const key of Object.keys(rawData)) {
            const singleItem = rawData[Number(key)];
            const houseSaint = houseSaints.filter((saint:IHouseSaintsProps) => saint.houseName === singleItem.house_description);
            const saintBlob = await this.fetchBlobs(houseSaint[0].saintImage);
            const saintImage = URL.createObjectURL(saintBlob);
            const houseColorRGB = this.hexToRgb(singleItem.house_color);
            const darkerHouseColor = this.DarkerRGBColor(houseColorRGB, 20);
            housesArray.push(new House(singleItem.house_id, singleItem.house_description, houseColorRGB, singleItem.house_total, singleItem.student_year, singleItem.house_place_asc, singleItem.house_place_desc, saintImage, darkerHouseColor));
        }
        return buildResponse(true, 'Houses built successfully.', housesArray);
    }

    hexToRgb(hex: string) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

        if(result){
            return{
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
              };
        }else{
            throw new Error('Failed to retrieve RGB value from Hex');
        }
        
      }

      DarkerRGBColor(rgb:RGBColorProps, percent:number){
        const clamp = (value: number) => Math.max(0, Math.min(255, value));
        const factor = (100 - percent) / 100;
        const darkenedR = clamp(Math.round(rgb.r * factor));
        const darkenedG = clamp(Math.round(rgb.g * factor));
        const darkenedB = clamp(Math.round(rgb.b * factor));

        const darkRGB = {r: darkenedR, g:darkenedG, b:darkenedB}

        return darkRGB
      }
    }