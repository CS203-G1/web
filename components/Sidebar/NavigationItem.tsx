import { useRouter } from 'next/router'
import React from 'react'

interface props {
    children: React.ReactNode
    name: string
}

const NavigationItem: React.FC<props> = (props) => {

    const router = useRouter()
    const pathName = router.pathname

    const background = pathName === "/" + props.name.toLowerCase() ? "bg-blue-700 cursor-default" : "hover:bg-blue-700 cursor-pointer"
    return (
        <div className={`px-3 py-3 ${background} rounded-sm flex flex-row gap-2 items-center`}>
            {props.children}
            <p>
                { props.name }
            </p>
        </div>
    )
}

export default NavigationItem