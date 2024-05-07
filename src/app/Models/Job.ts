import { jobField } from "./JobField"
import { AREA } from "./Area"
export interface Job {
    jobName: string
    jobfield: jobField
    scopeOfHours: number
    area: AREA
    requirements: string
    workingFromHome: boolean
}