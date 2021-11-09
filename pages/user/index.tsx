import { Auth } from "aws-amplify"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState } from "react"
import Image from 'next/image'
import { Modal, Popover, message } from 'antd'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"

type Form = {
    password: string
}

const UserLogin = () => {

    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [newModal, setNewModal] = useState(false)
    const [cognitoUser, setCognitoUser] = useState()

    const schema = yup.object().shape({
        password: yup.string().min(1).max(30).required(),
        repassword: yup.string().min(1).max(30).required(),
    })

    const { register, handleSubmit, formState: { errors }, reset, getValues } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmitHandler = async (data: Form) => {
        handleModalOk()
    }

    const login = async () => {
        try {
            const res = await Auth.signIn(email, password)
            console.log(res);
            setCognitoUser(res)
            if (res.challengeName === "NEW_PASSWORD_REQUIRED") {
                setNewModal(true)
            } else {
                router.push("/user/dashboard")
            }

        } catch (e) {
            message.error(e.message)
        }
    }

    const handleModalClose = () => {
        setNewModal(false)
    }

    const handleModalOk = async () => {
        try {
            await Auth.completeNewPassword(
                cognitoUser,
                getValues("password")
            )
            router.push("/user/dashboard")
        } catch (e) {
            console.log(e);
            message.error(e.message)
        }
    }

    return (
        <>
            <Modal visible={newModal} title="Set your password" onOk={handleModalOk} onCancel={handleModalClose} >
                <h1 className="text-lg mb-4 text-gray-500">
                    This is your first time logging into your account, please set a new password!
                </h1>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className="flex flex-col gap-3">

                        <div className="flex flex-col">
                            <label htmlFor="">Password</label>
                            <Popover content={errors.name?.message} visible={errors?.name ? true : false} placement="right">
                                <input {...register("password")} className="border-2 rounded-md px-2 py-1 lg:w-1/2" type="text" />
                            </Popover>
                        </div>


                        <div className="flex flex-col">
                            <label htmlFor="">Re-enter Password</label>
                            <Popover style={{ color: 'white' }} overlayClassName="text-white" content={errors.email?.message} visible={errors?.email ? true : false} color="red" placement="right">
                                <input {...register("repassword")} className="border-2 rounded-md px-2 py-1 lg:w-1/2" type="text" />
                            </Popover>
                        </div>
                    </div>
                </form>
            </Modal>
            <div className="h-screen flex flex-row">

                <div className="h-full flex-1 bg-gray-50 flex flex-col justify-center lg:px-36 px-10">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-3xl font-bold">
                                User Login
                        </h1>

                            <p className="font-semibold text-gray-500">
                                Ease your load for rostering
                        </p>
                        </div>

                        <form>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="" className="font-semibold">
                                        Email*
                                </label>
                                    <input type="email" className="rounded-full px-4 py-3 border" placeholder="mail@website.com"
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                        }} />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label htmlFor="" className="font-semibold">
                                        Password*
                                </label>
                                    <input type="password" className="rounded-full px-4 py-3 border" placeholder="Enter your password"
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                        }} />
                                </div>

                                <div className="flex flex-row justify-between items-center">
                                    <div className="flex flex-row items-center gap-2">
                                        <input type="checkbox" name="" id="" />

                                        <span className="font-semibold">
                                            Remember me
                                    </span>
                                    </div>

                                    <Link href="/">
                                        Forget password?
                                </Link>
                                </div>

                                <button type="button" className="rounded-full bg-blue-400 py-3 text-white text-center hover:bg-blue-600"
                                    onClick={() => {
                                        login()
                                    }}>
                                    Login
                            </button>
                            </div>
                        </form>

                        <div className="flex flex-row gap-1">
                            <span>
                                Not registered yet?
                        </span>
                            <Link href="/register">
                                <a href="" className="text-blue-500 hover:text-blue-700">Create an account</a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="h-full lg:flex flex-col hidden flex-1 bg-blue-100  justify-center px-32">
                    <div className="transform duration-300 ease-in-out scale-100 hover:scale-110">
                        {/* <Image src={LoginImage} alt="Login image" /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserLogin