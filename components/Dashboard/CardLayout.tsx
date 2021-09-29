import React from 'react'

interface props {
    header: string
    children: React.ReactNode
}

const CardLayout = (props:props) => {
    return (
        <div className="card bg-white flex-auto">
            <h1 className="text-xl font-bold">
                {props.header}
            </h1>
            {props.children}
        </div>
    )
}
export default CardLayout