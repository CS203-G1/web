import React from 'react'

interface props {
    header: string
    flex?:string
    children: React.ReactNode
}

const CardLayout = (props:props) => {
    const flex = props.flex ? props.flex : "flex-auto"
    return (
        <div className={`card bg-white ${flex}`}>
            <h1 className="text-xl font-bold mb-4">
                {props.header}
            </h1>
            {props.children}
        </div>
    )
}
export default CardLayout