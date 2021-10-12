import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// @ts-ignore
import { UilBookReader, UilUser, UilAngleRightB } from '@iconscout/react-unicons'
import Link from 'next/link'

const Home: NextPage = () => {
    return (
        <div className="h-screen flex flex-row">
            <div className="h-full w-96 bg-blue-100">

            </div>

            <div className="h-full flex-1 flex flex-col bg-gray-100 justify-center px-32 gap-10">
                <div>
                    <h1 className="text-3xl font-semibold text-gray-600">
                        Who are you logging in as?
                    </h1>
                    <h3 className="text-gray-500 font-semibold mt-2">
                        Choose admin if you are the manager of the organisation
                    </h3>
                </div>

                <div className="flex flex-col gap-6">
                    {/* Admin card */}
                    <Link href="/admin-login" passHref>
                        <div className="bg-white flex flex-row justify-between items-center px-4 py-4 rounded-lg w-96 border border-white hover:border-blue-400 hover:bg-blue-100 cursor-pointer role-card">
                            <div className="flex flex-row items-center gap-4">
                                <div className="p-2 border rounded-md bg-blue-500 text-white">
                                    <UilBookReader />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-gray-700">
                                        Admin
                                    </h3>
                                    <p className="text-xs text-gray-400">
                                        Access to admin rights to your organisation
                                    </p>
                                </div>
                            </div>
                            <div className="text-blue-400 role-card-arrow">
                                <UilAngleRightB />
                            </div>
                        </div>
                    </Link>

                    <Link href="/employee-login" passHref>
                        <div className="bg-white flex flex-row justify-between items-center px-4 py-4 rounded-lg w-96 border border-white hover:border-blue-400 hover:bg-blue-100 cursor-pointer role-card">
                            <div className="flex flex-row items-center gap-4">
                                <div className="p-2 border rounded-md bg-blue-500 text-white">
                                    <UilUser />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-gray-700">
                                        Employee
                                </h3>
                                    <p className="text-xs text-gray-400">
                                        See your employee account
                                </p>
                                </div>
                            </div>
                            <div className="text-blue-400 role-card-arrow">
                                <UilAngleRightB />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
