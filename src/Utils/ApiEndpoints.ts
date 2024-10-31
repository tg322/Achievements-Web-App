import axios from "axios";
import { buildResponse } from "../BuildResponse";

export interface BuildResponseType {
    success: boolean;
    message: string;
    data?: any; 
    error?: any; 
}

export class ApiEndpoints{

        /**
     * Builds a structured response for internal use.
     *
     * @remarks
     * Use this method to generate a structured response for general internal use.
     * 
     *
     * @param success - A boolean success value, true = successful, false = unsuccessful.
     * @param message - The message to return. 
     * @param data - Optional? The data to return.
     * @param error - Optional? The error to return.
     * @returns Array e.g {success:true, message: 'Data retrieved.', data:{data}}
     *
     * @beta
     */

    buildResponse(success: boolean, message: string, data?: any, error?: any): BuildResponseType {
        return {
            success: success,
            message: message,
            data: data,
            error: error
        };
    }

    async fetchAll(): Promise<BuildResponseType>{
        return new Promise(async (resolve, reject) => {
        axios.get('https://achievements-api.stpaulscatholiccollege.co.uk/houses')
            .then(async function (response) {
                // handle success - Store data in useStates
                resolve(buildResponse(true, 'All house totals returned successfully.', response.data));
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                reject(buildResponse(false, 'An error occurred while fetching all house totals.', undefined,error));
            })

        });
    }

    async fetchSingleHouseTotals(house:string): Promise<BuildResponseType>{
        return new Promise(async (resolve, reject) => {
            axios.get(`https://achievements-api.stpaulscatholiccollege.co.uk/houses?house_initial=${house.charAt(0)}`)
            .then(async function (response) {
                // handle success - Store data in useStates
                resolve(buildResponse(true, 'Single house totals returned successfully.', response.data));
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                reject(buildResponse(false, 'An error occurred while fetching single house totals.', undefined,error));
            })
        
        })
    }

    async fetchHousesByYear(year:number): Promise<BuildResponseType>{
        return new Promise(async (resolve, reject) => {
            axios.get(`https://achievements-api.stpaulscatholiccollege.co.uk/houses?student_year=${year}`)
            .then(async function (response) {
                // handle success - Store data in useStates
                resolve(buildResponse(true, 'House totals by year returned successfully.', response.data));
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                reject(buildResponse(false, 'An error occurred while fetching house totals by year.', undefined,error));
            })
        });
    }


}