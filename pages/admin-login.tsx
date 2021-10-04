import { Formik, Field, Form } from "formik";
<<<<<<< HEAD
import Link from 'next/link'
import Image from 'next/image'
import LoginImage from '../public/Login/login.svg'
import { Auth } from 'aws-amplify'
import { useState } from "react";

const AdminLogin = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = async () => {
        try {
            const res = await Auth.signIn(email, password)
        } catch(e) {
            console.log(e.message);
        }
    }

    return (
        <div className="h-screen flex flex-row">

            <div className="h-full w-1/2 bg-gray-100 flex flex-col justify-center px-36">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-bold">
                            Login
                        </h1>
                        
                        <p className="font-semibold text-gray-500">
                            Ease your load for rostering
                        </p>
                    </div>

                    <form action="submit">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="" className="font-semibold">
                                    Email*
                                </label>
                                <input type="email" className="rounded-full px-4 py-3 border" placeholder="mail@website.com" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="" className="font-semibold">
                                    Password*
                                </label>
                                <input type="email" className="rounded-full px-4 py-3 border" placeholder="Enter your password" />
                            </div>

                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row items-center gap-2">
                                    <input type="checkbox" name="" id=""/>

                                    <span className="font-semibold">
                                        Remember me
                                    </span>
                                </div>

                                <Link href="/">
                                    Forget password?
                                </Link>
                            </div>

                            <button type="submit" className="rounded-full bg-blue-400 py-3 text-white text-center hover:bg-blue-600">
                                Login
                            </button>
                        </div>
                    </form>

                    <div className="flex flex-row gap-1">
                        <span>
                            Not registered yet? 
                        </span>
                        <a href="" className="text-blue-500 hover:text-blue-700">
                            Create an account
                        </a>
                    </div>
                </div>
            </div>

            <div className="h-full flex-1 bg-blue-100 flex flex-col justify-center px-32">
                <div className="transform duration-300 ease-in-out scale-100 hover:scale-110">
                    <Image src={LoginImage} alt="Login image" />
=======

const AdminLogin = () => {
    return (
        <div className="h-screen flex flex-row">
            <div className="h-full w-96 bg-blue-100">

            </div>

            <div className="h-full flex-1 bg-gray-100 flex flex-col justify-center items-center">
                <div className="flex flex-col gap-3">
                    <h1 className="text-3xl font-bold">
                        Sign in to CS203
                    </h1>

                   <form action="submit">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">
                                Email
                            </label>
                            <input type="email" className="" />
                        </div>
                   </form>
>>>>>>> develop
                </div>
            </div>
        </div>
    )
}
export default AdminLogin