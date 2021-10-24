import React from "react"
import Layout from "../components/Common/Layout"

const Settings = () => {
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
                    
                </div>
            </div>
        </Layout>
    )
}

export default Settings