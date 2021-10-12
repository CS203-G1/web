import axios from 'axios'
import { DashboardSummary }from '../../../types/dashboard/summary'

const uri = "https://ba8cm5du31.execute-api.ap-southeast-1.amazonaws.com/dev"

export const getEmployeesSummary = async ( accessToken: string ) => {

    const res = await axios.get<DashboardSummary>(`${uri}/roster/companies/14f671b0-511e-43e4-86bb-6828f7a8e12d/work-statistics/summary`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })

    if (res.status != 200) {
        console.log(res);
        
    } else {
        return res.data
    }
    
}

export const getWorkingHistory = async ( accessToken: string ) => {
    const res = await axios.get(`${uri}/roster/companies/14f671b0-511e-43e4-86bb-6828f7a8e12d/work-statistics/weekly`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })

    if (res.status != 200) {
        return []
    }
    return res.data
}

export const getOnsite = async ( accessToken: string ) => {
    const res = await axios.get(`${uri}/roster/companies/14f671b0-511e-43e4-86bb-6828f7a8e12d/work-statistics/onsite`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })

    if (res.status != 200) {
        return []
    }
    return res.data
}

export const getRemoteAndOnsite = async ( accessToken: string ) => {
    const res = await axios.get(`${uri}/roster/companies/14f671b0-511e-43e4-86bb-6828f7a8e12d/work-statistics/daily`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })

    if (res.status != 200) {
        return []
    }
    return res.data
}