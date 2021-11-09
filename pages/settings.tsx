import React, { useEffect, useState } from "react"
import Layout from "../components/Common/Layout"
import { Auth } from 'aws-amplify';
import { useRouter } from "next/router";
import { getEmployee } from "../services/employees/employees";
import { Modal } from 'antd'

const Settings = () => {
    const router = useRouter()

    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [name, setName] = useState("")
    const [heathstatus, setHeathStatus] = useState("")

    useEffect(() => {
        Auth.currentAuthenticatedUser().then(user => {
            console.log(user);
            setEmail(user.attributes.email)
            setNumber(user.attributes.phone_number)
            const jwt = user.signInUserSession.accessToken.jwtToken

            getEmployee(jwt, "49c13ace-ca48-44bb-a9e9-8e3c330862db", user.attributes.sub).then(employee => {
                if (employee) {
                    setHeathStatus(employee.healthStatus)
                    setName(employee.name)
                }
            })
        })
    }, [])

    const signOut = async () => {
        try {
            await Auth.signOut()
            router.push("/")
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <Layout header="User Settings">
                <h1 className="text-xl font-bold">
                    Account Settings
            </h1>

                <div className="mt-6 py-4 border-t border-b flex flex-row gap-4">
                    <div className="flex flex-col gap-2 w-1/2">
                        <div className="flex flex-col">
                            <h2 className="text-lg font-bold">
                                Name
                        </h2>

                            <div className="text-gray-500">
                                name
                        </div>
                        </div>

                        <div className="flex flex-col">
                            <h2 className="text-lg font-bold">
                                Email
                        </h2>

                            <div className="text-gray-500">
                                {email}
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <h2 className="text-lg font-bold">
                                Phone Number
                        </h2>

                            <div className="text-gray-500">
                                {number}
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <h2 className="text-lg font-bold">
                                Health Status
                        </h2>

                            <div className="text-gray-500">
                                {heathstatus}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-1/2 items-end gap-4">
                        <button className="bg-red-500 px-4 py-2 rounded-md text-white" onClick={() => {
                            signOut()
                        }}>
                            Logout
                    </button>
                        <button className="bg-blue-500 px-4 py-2 rounded-md text-white" onClick={() => {
                            signOut()
                        }}>
                            Reset Password
                    </button>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Settings