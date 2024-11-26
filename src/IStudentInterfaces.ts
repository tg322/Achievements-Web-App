export type Direction = 'vertical' | 'horizontal';

// "house_description": "Damascus",
//     "house_color": "#e5ce15",
//     "house_accent": "#b7a511",
//     "student_name_and_reg": "Oli C. (8D)",
//     "student_initials": "OC",
//     "student_surname": "Clancy",
//     "student_forename": "Oli",
//     "student_reg": "8D",
//     "student_email": "OClancy23@stpaulscc.co.uk",
//     "student_year": 8,
//     "student_achievement_points": 76,
//     "student_photo_graph_api":

export interface IStudentProps{
    houseDescription: string;
    houseColor: string;
    darkerHouseColor: string;
    studentForename: string;
    studentSurname: string;
    studentReg:string;
    studentYear: number;
    points: number;
    blob:string | null;
}

export interface RGBColorProps{
    r:number;
    g:number;
    b:number;
}

export class Student implements IStudentProps{
    constructor (
        public houseDescription: string,
        public houseColor: string,
        public darkerHouseColor: string,
        public studentForename: string,
        public studentSurname: string,
        public studentReg:string,
        public studentYear: number,
        public points: number,
        public blob:string | null,
    ) { }
}

export interface IStudentStructure{
    topThree:IStudentProps[];
    students:IStudentProps[];
}

export class StudentStructure implements IStudentStructure{
    constructor (
        public topThree: IStudentProps[],
        public students: IStudentProps[],
    ) { }
}