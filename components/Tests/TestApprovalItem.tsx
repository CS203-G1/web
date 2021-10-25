import Image from 'next/image'
import { Modal } from 'antd'
import { useState } from 'react'

interface props {
    photourl?: string
    artId: string
}

const TestApprovalItem = () => {

    const [Modal, setModal] = useState(false)

    const process = async () => {

    }

    return (
        <>
            <div className="w-72 flex flex-col gap-6 pt-6 bg-white items-center rounded-lg shadow cursor-pointer transform scale-100 hover:shadow-lg hover:scale-105 duration-300 ease-in-out">
                <Image className="object-cover" height={200} width={200} src="https://picsum.photos/200" alt="picture" />
                <div className="flex flex-row w-full border-t border-l border-r">
                    <button className="flex-1 py-2 border-r text-center text-green-500 hover:bg-gray-100">
                        Approve
                </button>
                    <button className="flex-1 py-2 text-center text-red-500 hover:bg-gray-100">
                        Reject
                </button>
                </div>
            </div>
        </>
    )
}

export default TestApprovalItem