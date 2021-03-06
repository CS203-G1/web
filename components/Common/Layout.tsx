import React from "react"
import Sidebar from './Sidebar'
import Navbar from './Navbar'

interface props {
    children: React.ReactNode
    header: string
    sidebar?: boolean
}

const Layout = (props:props) => {
    return (
        <div className="h-screen w-full bg-gray-100 flex flex-row overflow-auto">
            <Sidebar close={ props.sidebar } />
            <div className="flex flex-col flex-1 overflow-auto">
                <Navbar title={ props.header } />
                <div className={ !props.sidebar ? `py-4 px-10 flex-1`: "px-2" }>
                    { props.children }
                </div>
            </div>

        </div>
    )
}
export default Layout
