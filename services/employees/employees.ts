import axios from 'axios'
import { Employee } from '../../types/Employee/employee'

const uri = "https://ba8cm5du31.execute-api.ap-southeast-1.amazonaws.com/dev"

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
    try{
        const res = await axios.get<Employee>(`${uri}/roster/departments/${departmentId}/employees/${employeeId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        if (res.status !== 200) {
            return []
        }
    
        return res.data
    } catch(e) {
        console.log(e.message);
        
    }
    
}