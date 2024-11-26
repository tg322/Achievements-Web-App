import { IHouseProps } from "./IHouseInterfaces";
import { IStudentProps, IStudentStructure } from "./IStudentInterfaces";

export interface IDataTypeProps {
    type:string;
    value:number|string;
}

export class DataType implements IDataTypeProps{
    constructor(
        public type:string,
        public value:number|string,
    ) {}
}

interface IBaseGraphSettingsProps{
    orientation:string|null;
    interval:number;
}

export interface IHouseGraphSettings extends IBaseGraphSettingsProps{
    type: 'house';
    dataType: IDataTypeProps | null;
    data: IHouseProps[];
  }
  
  export interface IStudentGraphSettings extends IBaseGraphSettingsProps{
    type: 'student';
    dataType: IDataTypeProps[] | null;
    data: IStudentStructure;
  }

  export type IGraphSettingsProps = IHouseGraphSettings | IStudentGraphSettings;

  export class HouseGraphSettings implements IHouseGraphSettings {
    constructor(
        public type:'house',
        public dataType:IDataTypeProps | null,
        public data: IHouseProps[],
        public interval: number,
        public orientation: string,

    ){}
  }

  
  export class StudentGraphSettings implements IStudentGraphSettings {
    constructor(
        public type:'student',
        public dataType:IDataTypeProps[] | null,
        public data: IStudentStructure,
        public interval: number,
        public orientation: string,

    ){}
  }