export type Direction = 'vertical' | 'horizontal';

// {
//     "house_description": "Rome",
//     "house_color": "#991915",
//     "student_name": "Matty L.",
//     "student_year": 7,
//     "student_achievement_points": 47,
//     "from_date_student_achievement_points": 47
//   },

export interface IStudentProps{
    houseDescription: string;
    houseColor: RGBColorProps;
    studentName: string;
    studentYear: number;
    points: number;
    fromDatePoints:number;
}

export interface RGBColorProps{
    r:number;
    g:number;
    b:number;
}

export class Student implements IStudentProps{
    constructor (
        public houseDescription: string,
        public houseColor: RGBColorProps,
        public studentName: string,
        public studentYear: number,
        public points: number,
        public fromDatePoints:number,
    ) { }
}