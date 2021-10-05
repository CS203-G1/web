import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link'

interface props {
    children: React.ReactNode
    name: string
    path: string
}

const NavigationItem: React.FC<props> = (props) => {

    const router = useRouter()
    const pathName = router.pathname

    const background = pathName === "/" + props.name.toLowerCase() ? "bg-blue-700 cursor-default" : "hover:bg-blue-700 cursor-pointer"
    return (
        <Link href={props.path}>
            <a href="" className={`px-3 py-3 hover:text-white ${background} rounded-sm flex flex-row gap-2 items-center`}>
                {props.children}
                <p>
                    { props.name }
                </p>
            </a>
        </Link>
    )
}

export default NavigationItem