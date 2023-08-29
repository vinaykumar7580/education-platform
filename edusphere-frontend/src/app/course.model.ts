
export interface Course{
    id:number;
    course_code:string;
    course_name:string;
    department: Department;
    credits:number;
    description:string;

}

export interface Department{
    id:number;
    name:string;
}