import React from "react"
import Layout from "../components/Common/Layout"
import { Auth } from 'aws-amplify';
import { useRouter } from "next/router";

const Settings = () => {
    const router = useRouter()

    const signOut = async () => {
        try {
            await Auth.signOut()
            router.push("/")
        } catch (e) {
            return
        }
    }

    return (
        <Layout header="User Settings">
            <h1 className="text-xl font-bold">
                Account Settings
            </h1>

            <div className="mt-6 py-4 border-t border-b flex flex-row gap-4">
                <div className="flex flex-col w-1/2">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-lg font-bold">
                            Profile
                        </h2>

                        <div className="text-gray-500">
                            This is your name
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-1/2 items-start">
                    <button className="bg-red-500 px-2 py-1 rounded-md text-white" onClick={() => {
                        signOut()
                    }}>
                        Logout
                    </button>
                </div>
            </div>
        </Layout>
    )
}

export default Settings