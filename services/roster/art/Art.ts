import axios from "axios"

// const uri = process.env.NEXT_PUBLIC_ROSTER_URL
const uri = "http://localhost:8080"

export const addArt = async ( accessToken: string, employeeId: string, file: File ) => {
    const formData = new FormData()
    formData.append('employeeId', employeeId)
    formData.append('file', file)
    await axios.post(`${uri}/employees/${employeeId}/requests/art-request`, formData, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}

export const getArts = async (accessToken: string) => {
    const res = await axios.get(`${uri}/companies/${"14f671b0-511e-43e4-86bb-6828f7a8e12d"}/requests/art-request/PENDING`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })

    if (res.status != 200) {
        return []
    }
    return res.data
}

export const processArt = async ( accessToken: string, artId: string, HeathStatus: string, RequestStatus: string ) => {
    await axios.put(`${uri}/requests/art-request/${artId}`, {
        heathStatus: HeathStatus,
        requestStatus: RequestStatus,
    }, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}