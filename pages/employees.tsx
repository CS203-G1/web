import { Auth } from "aws-amplify"
import React, { useEffect, useState } from "react"
import Layout from "../components/Common/Layout"
import AddEmployeeModal from "../components/Employees/AddEmployeeModal"
import EmployeeCard from "../components/Employees/EmployeeCard"
import { getAllEmployees, addEmployee } from '../services/employees/employees'
import { Employee } from "../types/Employee/employee"

const Employees = () => {
    const [addEmployeeModal, setAddEmployeeModal] = useState(false)
    const [employees, setEmployees] = useState<Employee[]>()

    const getEmployees = async () => {
        const { signInUserSession } = await Auth.currentAuthenticatedUser()
        const jwt = signInUserSession.accessToken.jwtToken
        const res = await getAllEmployees(jwt)
        setEmployees(res)
    }

    useEffect(() => {
        getEmployees()
    }, [])

    const handleModalCancel = () => {
        setAddEmployeeModal(false)
    }

    const handleModalOk = async () => {
        
        setAddEmployeeModal(false)
    }
    return (
        <>
            <AddEmployeeModal visible={addEmployeeModal} handleCancel={handleModalCancel} handleOk={handleModalOk} />
            <Layout header="Employees">
                <div className="flex flex-row justify-between border-b">
                    <div className="flex flex-row gap-10">
                        <span className="font-bold py-3 cursor-pointer border-b-4 border-blue-400">
                            All
                    </span>

                        <span className="py-3 cursor-pointer">
                            Work Location
                    </span>
                    </div>

                    <button type="button" className="px-3 py-2 bg-blue-500 rounded-lg font-semibold shadow-lg text-white mb-2 hover:bg-blue-700 hover:shadow-xl"
                        onClick={() => {
                            setAddEmployeeModal(true)
                        }}
                    >
                        Add Employee
                </button>
                </div>

                <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 justify-evenly gap-10 py-6">
                    {
                        employees && employees.map((item, index) => {
                            return (
                                <EmployeeCard
                                    key={index}
                                    id={item?.id}
                                    photoUrl="https://picsum.photos/200"
                                    name={item?.name}
                                    email="byebye@afterclass.com"
                                    position="Line Cook"
                                    status="Vaccinated " />
                            )
                        })
                    }
                </div>
            </Layout>
        </>
    )
}
export default Employees