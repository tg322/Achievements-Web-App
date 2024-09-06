export interface IHouseProps{
    houseId: number;
    houseDescription: String;
    houseColor: String;
    houseTotal: number;
    studentYear: number;
    housePlaceAsc: number;
    housePlaceDesc:number;
}

export class House implements IHouseProps{
    constructor (
        public houseId: number,
        public houseDescription: String,
        public houseColor: String,
        public houseTotal: number,
        public studentYear: number,
        public housePlaceAsc: number,
        public housePlaceDesc:number
    ) { }
  }