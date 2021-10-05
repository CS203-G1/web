import React, { useState } from "react"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Auth } from "aws-amplify"
import Image from 'next/image'
import LoginImage from '../public/Login/login.svg'

const Register = () => {

    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repassword, setRepassword] = useState("")
    const [organisationName, setOrganisationName] = useState("")


    const register = async () => {
        try {
            const res = await Auth.signUp({
                username: email,
                password: password
            })
            console.log(res);
            
        } catch(e) {
            console.log(e.message);
        }
    }


    return (
        <div className="h-screen flex flex-row">

            <div className="h-full flex-1 bg-gray-50 flex flex-col justify-center xl:px-36 px-10">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-bold">
                            Admin Registration
                        </h1>
                        
                    </div>

                    <form>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="" className="font-semibold">
                                    Email
                                </label>
                                <input type="email" className="rounded-full px-4 py-3 border" placeholder="mail@website.com" 
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}/>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="" className="font-semibold">
                                    Password
                                </label>
                                <input type="password" className="rounded-full px-4 py-3 border" placeholder="Enter your password" 
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }} />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="" className="font-semibold">
                                    Re-Enter Password
                                </label>
                                <input type="password" className="rounded-full px-4 py-3 border" placeholder="Enter your password" 
                                onChange={(e) => {
                                    setRepassword(e.target.value)
                                }} />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="" className="font-semibold">
                                    Organisation Name
                                </label>
                                <input type="text" className="rounded-full px-4 py-3 border" placeholder="Enter your organisation name" 
                                onChange={(e) => {
                                    setOrganisationName(e.target.value)
                                }} />
                            </div>

                            <button type="button" className="rounded-full bg-blue-400 py-3 text-white text-center hover:bg-blue-600"
                            onClick={() => {
                                register()
                            }}>
                                Register
                            </button>
                        </div>
                    </form>

                    <div className="flex flex-row gap-1">
                        <span>
                            Have an account? Click 
                        </span>
                        <Link href="/">
                            <a href="" className="text-blue-500 hover:text-blue-700">here</a>
                        </Link>
                        <span>
                            to login!
                        </span>
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
export default Register