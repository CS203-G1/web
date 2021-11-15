// @ts-ignore
import { UilClock, UilSyringe } from '@iconscout/react-unicons'
import { Progress } from 'antd'
import Link from 'next/link'
import React from 'react'
import { Employee } from '../../types/Employee/employee'
import Image from 'next/image'

type dict = {
    [key: string]: string
}

const EmployeeCard = (props: Employee) => {
    const color: dict = {
        "HEALTHY": "bg-green-500",
        "ART Tested": "bg-blue-500",
        "PCR Tested": "bg-indigo-500",
        "COVID": "bg-red-500"
    }
    return (
        <Link href={`/employee/${ props.id }`} passHref>
            <div className="flex flex-col gap-2 w-72 pt-6 bg-white items-center rounded-lg shadow cursor-pointer transform scale-100 hover:shadow-lg hover:scale-105 duration-300 ease-in-out">
                <Image className="rounded-full object-cover" height={100} width={100} src="https://picsum.photos/200" alt="picture" />
                <h3 className="text-lg font-semibold">
                    { props.name }
                </h3>
                <p className="text-gray-500 font-semi-bold">
                    { props.email }
                </p>
                <div className="flex flex-row gap-2 items-center">
                    <span className={`p-1 ${color[props.status]} rounded-full`}></span>
                    <span>{ props.status }</span>
                </div>
                <div className="py-4 bg-gray-100 w-full border-t text-center text-gray-500 font-semibold">
                    {props.position ? props.position : "-"}
                </div>
            </div>
        </Link>
    )
}
export default EmployeeCard