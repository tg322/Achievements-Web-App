import { IHouseProps } from "./IHouseInterfaces";

export interface IGraphSettingsProps{
    dataType:IDataTypeProps;
    orientation:string| null;
    interval:number;
    data: IHouseProps[];
}

// export interface IDataTypeProps{
//     dataType: {year:number} | {house:string} | null
// }

// export interface IYearProps{
//     year:number;
// }

// export interface IHouseProps{
//     house: string;
// }

export type IDataTypeProps =
  | { type: 'year'; year: number }
  | { type: 'house'; house: string }
  | { type: 'none' };

export class GraphSettings implements IGraphSettingsProps{
    constructor(
        public dataType:IDataTypeProps,
        public orientation:string|null,
        public interval:number,
        public data: IHouseProps[],
    ) {}
}