import axios from 'axios'

const uri = process.env.NEXT_PUBLIC_ROSTER_URL

export const getRosterByDay = async (accessToken: string, date: string, employerId: string) => {
    const res = await axios.get(`${uri}/roster/employers/${employerId}/rosters/date/${date}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })

    return res.data
}

export const getRosterByEmployeeId = async (accessToken: string, employeeId: string) => {
    const res = await axios.get(`${uri}/roster/employees/${employeeId}/rosters/weekly`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    return res.data
}

export const addEmployeeRoster = async (accessToken: string, rosterId: string, employeeId: string) => {
    let message = ""
    try {
        const res = await axios.post(`${uri}/roster/rosters/${rosterId}/employees/${employeeId}`, {

        }, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
    }
    catch (e) {
        console.log(e.toString());
        
        throw Error("You have reached the maximum capacity")
    } finally{
        
    }
}

export const removeEmployeeRoster = async (accessToken: string, rosterId: string, employeeId: string) => {
    try {
        const res = await axios.delete(`${uri}/roster/rosters/${rosterId}/employees/${employeeId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
    }
    catch (e) {
        throw e
    }
}