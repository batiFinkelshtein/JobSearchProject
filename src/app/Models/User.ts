import { jobField } from "./JobField"
export interface User {
    Id: number
    Name:string
    password:string
    jobField:jobField
}