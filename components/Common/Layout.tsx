import React from "react"
import Sidebar from './Sidebar'
import Navbar from './Navbar'

interface props {
    children: React.ReactNode
}

const Layout = (props:props) => {
    return (
        <div className="min-h-screen w-full bg-gray-100 flex flex-row">
            <Sidebar />
            <div className="flex-1">
                <Navbar />
                {props.children}
            </div>

        </div>
    )
}
export default Layout