import { jobField } from "./JobField"
import { AREA } from "./Area"
export interface Job {
    JobName: string
    jobfield: jobField
    ScopeOfHours: number
    area: AREA
    requirements: string
    WorkingFromHome: boolean
}