import axios from 'axios'

const uri = process.env.NEXT_PUBLIC_ROSTER_URL

export const getAnalyticsBarGraph = async () => {
    try {
        const res = await axios.get(`${uri}/analytics/graph/bar`)
        return res.data
    } catch (e) {
        console.log(e);
    }
}