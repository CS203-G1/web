import React, { useEffect, useState } from "react"
import CardLayout from "../CardLayout"
import EmployeesOnSite from "./EmployeesOnSIte"
import { getOnsite } from '../../../services/roster/dashboard/statistics'
import { Auth } from "aws-amplify"


const OnSiteCard = () => {
    // const data = [
    //     {
    //         name: "Arvin Larving",
    //         department: "Product Management",
    //         status: "Vaccinated ",
    //     },
    //     {
    //         name: "Bing Yu Ling Yu",
    //         department: "Product Management",
    //         status: "ART Tested",
    //     },
    //     {
    //         name: "Felice Lelice", 
    //         department: "Product Management",
    //         status: "PCR Tested",
    //     },
    //     {
    //         name: "Jerald Lerald",
    //         department: "Product Management",
    //         status: "Not Tested",
    //     },
    // ]

    const [data, setData] = useState<any>()

    const getData = async () => {
        const { signInUserSession } = await Auth.currentAuthenticatedUser()
        const jwt = signInUserSession.accessToken.jwtToken
        const res = await getOnsite(jwt)
        setData(res)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <CardLayout header="Employees Onsite">
            <div className="grid grid-cols-3 text-gray-400 text-sm">
                <div>
                    Full Name
                </div>

                <div>
                    Department
                </div>

                <div>
                    Status
                </div>
            </div>

            {
                data && data.map((item: any, index: any) => {
                    return (
                        <EmployeesOnSite key={ index } name={ item?.name } department={ item?.department?.name } status={ item?.healthStatus } />
                    )
                })
            }
        </CardLayout>
    )
}
export default OnSiteCard