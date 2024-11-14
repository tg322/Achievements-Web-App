import { IHouseProps } from "./IHouseInterfaces";

export interface IGraphSettingsProps{
    dataType:IDataTypeProps | IDataTypeProps[] | null;
    orientation:string| null;
    interval:number;
    data: IHouseProps[];
}

export interface IDataTypeProps {
    type:string;
    value:number|string;
}

export class GraphSettings implements IGraphSettingsProps{
    constructor(
        public dataType:IDataTypeProps | IDataTypeProps[] | null,
        public orientation:string|null,
        public interval:number,
        public data: IHouseProps[],
    ) {}
}

export class DataType implements IDataTypeProps{
    constructor(
        public type:string,
        public value:number|string,
    ) {}
}