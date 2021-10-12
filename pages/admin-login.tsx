import { Formik, Field, Form } from "formik";
import Link from 'next/link'
import Image from 'next/image'
import LoginImage from '../public/Login/login.svg'
import { Auth } from 'aws-amplify'
import { useState } from "react";
import { useRouter } from "next/router";

const AdminLogin = () => {

    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = async () => {
        try {
            const res = await Auth.signIn(email, password)
            router.push("/dashboard")
            
        } catch(e) {
        }
    }

    return (
        <div className="h-screen flex flex-row">

            <div className="h-full flex-1 bg-gray-50 flex flex-col justify-center lg:px-36 px-10">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-bold">
                            Admin Login
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
                                }}/>
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
                                    <input type="checkbox" name="" id=""/>

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
                    <Image src={LoginImage} alt="Login image" />
                </div>
            </div>
        </div>
    )
}
export default AdminLogin