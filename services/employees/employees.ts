import axios from 'axios'
import { Employee } from '../../types/Employee/employee'

const uri = process.env.NEXT_PUBLIC_ROSTER_URL

export const getAllEmployees = async ( accessToken: string ) => {
    const res = await axios.get<Employee[]>(`${uri}/roster/companies/14f671b0-511e-43e4-86bb-6828f7a8e12d/employees`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })

    if (res.status !== 200) {
        return []
    }

    return res.data
}

export const getEmployee = async ( accessToken: string, departmentId: string, employeeId: string) => {
    const res = await axios.get(`${uri}/roster/departments/${departmentId}/employees/${employeeId}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    if (res.status !== 200) {
        return []
    }

    return res.data
}