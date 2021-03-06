import Image from 'next/image'
import { Modal } from 'antd'
import { useState } from 'react'
import { processArt } from '../../services/roster/art/Art'
import { Auth } from 'aws-amplify'

interface props {
    photourl: string
    artId: string
    employeeId: string
    employeeName: string
    refresh: () => void
}

enum RequestStatus {
    PENDING,
    REJECTED,
    APPROVED,
    COVID
}

const TestApprovalItem = (props: props) => {

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

    const covid = () => {
        setStatus(RequestStatus.COVID)
        setModalVisible(true)
    }

    const cancelOperation = () => {
        setStatus(RequestStatus.PENDING)
        setModalVisible(false)
    }

    const onOk = async () => {
        const { signInUserSession } = await Auth.currentAuthenticatedUser()
        const jwt = signInUserSession.accessToken.jwtToken
        if (status == RequestStatus.APPROVED) {
            await processArt(jwt, props.artId, 'HEALTHY', 'APPROVED')
        } else if (status == RequestStatus.COVID) {
            await processArt(jwt, props.artId, 'COVID', 'APPROVED')
        } else {
            await processArt(jwt, props.artId, 'HEALTHY', 'REJECTED')
        }
        props.refresh()
        setModalVisible(false)
    }

    const process = async () => {

    }

    return (
        <>
            <Modal visible={modalVisible} onCancel={cancelOperation} onOk={onOk}>
                <div className="w-full flex flex-col items-center gap-6">
                    <h1 className="text-xl">
                        You are now
                            <span className={`${status === RequestStatus.APPROVED ? "text-green-500" : "text-red-500"}`}>
                            {status === RequestStatus.APPROVED ? " APPROVING " : " REJECTING "}
                        </span>
                        this test request
                    </h1>
                    <Image className="object-cover" height={200} width={200} src={props.photourl} alt="picture" />
                    <p className="text-xl">This test belongs to {props.employeeName}</p>
                </div>


            </Modal>
            <div className="w-72 flex flex-col gap-6 pt-6 bg-white items-center rounded-lg shadow">
                <Image className="object-cover" height={200} width={200} src={props.photourl} alt="picture" />
                <div className="flex flex-row w-full border-t border-l border-r">
                    <button className="flex-1 py-2 border-r text-center text-green-500 hover:bg-gray-100 rounded-bl-lg" onClick={approve}>
                        Approve
                </button>
                    <button className="flex-1 py-2 text-center text-red-500 hover:bg-gray-100 border-r" onClick={reject}>
                        Reject
                </button>
                    <button className="flex-1 py-2 text-center bg-red-500 text-white hover:bg-red-600 rounded-br-lg" onClick={covid}>
                        Covid
                </button>
                </div>
            </div>
        </>
    )
}

export default TestApprovalItem