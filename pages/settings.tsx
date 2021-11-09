import React, { useEffect, useState } from "react"
import Layout from "../components/Common/Layout"
import { Auth } from 'aws-amplify';
import { useRouter } from "next/router";
import { getEmployee } from "../services/employees/employees";
import { Modal, Popover, message } from 'antd'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"

const Settings = () => {
    const router = useRouter()

    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [name, setName] = useState("")
    const [heathstatus, setHeathStatus] = useState("")
    const [newModal, setNewModal] = useState(false)

    useEffect(() => {
        Auth.currentAuthenticatedUser().then(user => {
            console.log(user);
            setEmail(user.attributes.email)
            setNumber(user.attributes.phone_number)
            const jwt = user.signInUserSession.accessToken.jwtToken

            getEmployee(jwt, "49c13ace-ca48-44bb-a9e9-8e3c330862db", user.attributes.sub).then(employee => {
                console.log(employee);
                
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

    const schema = yup.object().shape({
        password: yup.string().min(1).max(30).required(),
        repassword: yup.string().min(1).max(30).required(),
    })

    const { register, handleSubmit, formState: { errors }, reset, getValues } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmitHandler = async () => {
        handleModalOk()
    }

    const handleModalClose = () => {
        setNewModal(false)
    }

    const handleModalOk = async () => {
        const password = getValues('password')
        const repassword = getValues('repassword')
        Auth.currentAuthenticatedUser().then(user => {
            Auth.changePassword(user, password, repassword)
        }).then(() => {
            message.success("Password has been reset successfully")
            setNewModal(false)
        }).catch((e) => {
            console.log(e);
            
            message.error(e.message)
        })
    }

    return (
        <>
            <Modal visible={newModal} onOk={handleModalOk} onCancel={handleModalClose}>
                <div className="flex flex-col w-full gap-6">
                    <div className="flex flex-col items-center gap-3">
                        <h1 className="text-lg font-bold">
                            Password Reset
                        </h1>
                        <h4>
                            Enter new password and then repeat it
                        </h4>
                    </div>

                    <form onSubmit={handleSubmit(onSubmitHandler)}>
                        <div className="flex flex-col gap-3 px-8">

                            <div className="flex flex-col">
                                <label htmlFor="">Old Password</label>
                                <Popover content={errors.name?.message} visible={errors?.name ? true : false} placement="right">
                                    <input {...register("password")} className="border-2 rounded-md px-2 py-2 w-full" type="password" />
                                </Popover>
                            </div>


                            <div className="flex flex-col">
                                <label htmlFor="">New Password</label>
                                <Popover style={{ color: 'white' }} overlayClassName="text-white" content={errors.email?.message} visible={errors?.email ? true : false} color="red" placement="right">
                                    <input {...register("repassword")} className="border-2 rounded-md px-2 py-2 w-full" type="password" />
                                </Popover>
                            </div>
                        </div>
                    </form>

                </div>
            </Modal>
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
                            setNewModal(true)
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