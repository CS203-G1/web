import axios from 'axios'
import { DashboardSummary }from '../../../types/dashboard/summary'

const uri = process.env.NEXT_PUBLIC_ROSTER_URL

export const getEmployeesSummary = async ( accessToken: string ) => {

    const res = await axios.get<DashboardSummary>(`${uri}/companies/14f671b0-511e-43e4-86bb-6828f7a8e12d/summary/employees`, {
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