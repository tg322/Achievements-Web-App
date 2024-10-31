import stBosco from './img/john_bosco.png';
import stTeresa from './img/mother_teresa.png';
import stRomero from './img/oscar_romero.png';
import stMacKillop from './img/mary_mackillop.png';
import stNewman from './img/john_henry_newman.png';
import stStein from './img/edith_stein.png';

export type Direction = 'vertical' | 'horizontal';

export interface IHouseProps{
    houseId: number;
    houseDescription: string;
    houseColor: RGBColorProps;
    houseTotal: number;
    studentYear: number;
    housePlaceAsc: number;
    housePlaceDesc:number;
    houseSaintPhoto: string | null;
    darkerHouseColor: RGBColorProps;
}

export interface RGBColorProps{
    r:number;
    g:number;
    b:number;
}

export interface IHouseSaintsProps{
    houseName:string;
    saintImage:string;
}

export interface houseDetailsProps{
    houseImage:string;
    houseName:string;
    houseColor:RGBColorProps;
    darkerHouseColor:RGBColorProps;
}

export class HouseDetails implements houseDetailsProps{
    constructor (
        public houseImage:string,
        public houseName:string,
        public houseColor:RGBColorProps,
        public darkerHouseColor:RGBColorProps
    ) { }
}

export const houseSaints:Array<IHouseSaintsProps> = 
            [{houseName: 'Athens', saintImage:stBosco}, 
            {houseName: 'Lystra', saintImage:stNewman}, 
            {houseName: 'Damascus', saintImage:stStein}, 
            {houseName: 'Corinth', saintImage:stMacKillop},
            {houseName: 'Valletta', saintImage:stTeresa},
            {houseName: 'Rome', saintImage:stRomero}];

export class House implements IHouseProps{
    constructor (
        public houseId: number,
        public houseDescription: string,
        public houseColor: RGBColorProps,
        public houseTotal: number,
        public studentYear: number,
        public housePlaceAsc: number,
        public housePlaceDesc:number,
        public houseSaintPhoto: string | null,
        public darkerHouseColor: RGBColorProps
    ) { }
}