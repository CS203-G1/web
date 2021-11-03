import axios from 'axios'

const uri = process.env.NEXT_PUBLIC_ROSTER_URL

export const getAnalyticsBarGraph = async () => {
    const res = axios.get(`${uri}/analytics/bar`)
}