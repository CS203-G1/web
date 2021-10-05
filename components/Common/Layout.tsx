import React from "react"
import Sidebar from './Sidebar'
import Navbar from './Navbar'

interface props {
    children: React.ReactNode
    header: string
}

const Layout = (props:props) => {
    return (
        <div className="min-h-screen w-full bg-gray-100 flex flex-row overflow-auto">
            <Sidebar />
            <div className="flex-1 overflow-auto h-screen">
                <Navbar title={props.header} />
                <div className="py-4 px-10">
                    {props.children}
                </div>
            </div>

        </div>
    )
}
export default Layout