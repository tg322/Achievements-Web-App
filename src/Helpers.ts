import { House, IHouseProps } from "./IHouseInterfaces";
import { buildResponse, BuildResponseType } from "./BuildResponse";


export class Helper {
    
    async buildHouses(rawData:any): Promise<BuildResponseType>{
        let housesArray:IHouseProps[] = [];

        for (const key of Object.keys(rawData)) {
            const singleItem = rawData[Number(key)];

            housesArray.push(new House(singleItem.house_id, singleItem.house_description, singleItem.house_color, singleItem.house_total, singleItem.student_year, singleItem.house_place_asc, singleItem.house_place_desc));
        }
        return buildResponse(true, 'Houses built successfully.', housesArray);
    }

    public configureGraphScaling(highestHouseTotal:Number){
        
    }
}