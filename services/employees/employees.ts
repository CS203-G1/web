import axios from 'axios'
import { Employee } from '../../types/Employee/employee'

const uri = process.env.NEXT_PUBLIC_ROSTER_URL

export const getAllEmployees = async (accessToken: string) => {
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

export const getEmployee = async (accessToken: string, departmentId: string, employeeId: string) => {
    try {
        const res = await axios.get<Employee>(`${uri}/roster/departments/${departmentId}/employees/${employeeId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })

        return res.data
    } catch (e) {
        console.log(e.message);
        return 
    }

}

export const addEmployee = async (accessToken: string, departmentId: string, name: string, email: string) => {
    try {
        const res = await axios.post<Employee>(`${uri}/roster/departments/${departmentId}/employees`, {
            email,
            name,
            vaccinationStatus: "SECOND_DOSE",
            vaccinationBrand: "PFIZER",
            healthStatus: "HEALTHY"

        }, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        if (res.status !== 200) {
            return []
        }

        return res.data
    } catch (e) {
        throw new Error("NOT VALID")
    }
}