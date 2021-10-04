import React from "react"
import CardLayout from "../CardLayout"
import EmployeesOnSite from "./EmployeesOnSIte"

const OnSiteCard = () => {
    const data = [
        {
            name: "Arvin Larving",
            department: "Product Management",
            status: "Vaccinated ",
        },
        {
            name: "Bing Yu Ling Yu",
            department: "Product Management",
            status: "ART Tested",
        },
        {
            name: "Felice Lelice",
            department: "Product Management",
            status: "PCR Tested",
        },
        {
            name: "Jerald Lerald",
            department: "Product Management",
            status: "Not Tested",
        },
    ]
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
                data.map((item, index) => {
                    return (
                        <EmployeesOnSite name={item.name} department={item.department} status={item.status} />
                    )
                })
            }
        </CardLayout>
    )
}
export default OnSiteCard