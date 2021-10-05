import React from "react"
import Layout from "../components/Common/Layout"
import EmployeeCard from "../components/Employees/EmployeeCard"

const Employees = () => {
    return (
        <Layout header="Employees Must Wash Hands">
            <div className="flex flex-row justify-between border-b">
                <div className="flex flex-row gap-10">
                    <span className="font-bold py-3 cursor-pointer border-b-4 border-blue-400">
                        All
                    </span>

                    <span className="py-3 cursor-pointer">
                        Work Location
                    </span>
                </div>

            </div>

            <div className="flex flex-wrap gap-10 justify-evenly py-6">
                <EmployeeCard 
                    photoUrl="https://picsum.photos/200" 
                    name="Bing Yu" 
                    email="hello@afterclass.com" 
                    position="Tech Lead Lech Lead"
                    time="0" 
                    status="Vaccinated " />
                <EmployeeCard 
                    photoUrl="https://picsum.photos/200" 
                    name="Rui Xian Lei Xian" 
                    email="hello@afterclass.com" 
                    position="Frontend Dog"
                    time="0" 
                    status="PCR Tested" />
                <EmployeeCard 
                    photoUrl="https://picsum.photos/200" 
                    name="Arving Larving" 
                    email="hello@afterclass.com" 
                    position="AWS Dashboard Admin"
                    time="0" 
                    status="Not Tested" />
                <EmployeeCard 
                    photoUrl="https://picsum.photos/200" 
                    name="Felice Lelice" 
                    email="hello@afterclass.com" 
                    position="Diversity"
                    time="0" 
                    status="Vaccinated " />
                <EmployeeCard 
                    photoUrl="https://picsum.photos/200" 
                    name="Jerald Lerald" 
                    email="hello@afterclass.com" 
                    position="DSC dude"
                    time="0" 
                    status="ART Tested" />
            </div>
        </Layout>
    )
}
export default Employees