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