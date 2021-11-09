import axios from 'axios'

const uri = process.env.NEXT_PUBLIC_ROSTER_URL

export const getRosterByDay = async (accessToken: string, date: string) => {
    const res = await axios.get(`${uri}/roster/employers/8cdbf3f5-4cae-4c20-adcd-9ee736c1813c/rosters/date/${date}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })

    return res.data
}