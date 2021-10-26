import Image from 'next/image'
import { Modal } from 'antd'
import { useState } from 'react'

interface props {
    photourl?: string
    artId: string
}

enum RequestStatus {
    PENDING,
    REJECTED,
    APPROVED
}

const TestApprovalItem = () => {

    const [modalVisible, setModalVisible] = useState(false)
    const [status, setStatus] = useState(RequestStatus.PENDING)

    const approve = () => {
        setStatus(RequestStatus.APPROVED)
        setModalVisible(true)
    }

    const reject = () => {
        setStatus(RequestStatus.REJECTED)
        setModalVisible(true)
    }
    
    const cancelOperation = () => {
        setStatus(RequestStatus.PENDING)
        setModalVisible(false)
    }

    const process = async () => {

    }

    return (
        <>
            <Modal visible={modalVisible} onCancel={cancelOperation} footer={null}>
                <div className="w-full flex flex-col items-center gap-6">
                    <h1 className="text-xl">
                        You are now
                            <span className={`${status === RequestStatus.APPROVED ? "text-green-500" : "text-red-500"}`}>
                                { status === RequestStatus.APPROVED ? " APPROVING " : " REJECTING " }
                            </span>
                        this test request
                    </h1>
                    <Image className="object-cover" height={200} width={200} src="https://picsum.photos/200" alt="picture" />
                </div>


            </Modal>
            <div className="w-72 flex flex-col gap-6 pt-6 bg-white items-center rounded-lg shadow cursor-pointer transform scale-100 hover:shadow-lg hover:scale-105 duration-300 ease-in-out">
                <Image className="object-cover" height={200} width={200} src="https://picsum.photos/200" alt="picture" />
                <div className="flex flex-row w-full border-t border-l border-r">
                    <button className="flex-1 py-2 border-r text-center text-green-500 hover:bg-gray-100 rounded-bl-lg" onClick={approve}>
                        Approve
                </button>
                    <button className="flex-1 py-2 text-center text-red-500 hover:bg-gray-100 rounded-br-lg" onClick={reject}>
                        Reject
                </button>
                </div>
            </div>
        </>
    )
}

export default TestApprovalItem