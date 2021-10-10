import { EmployeeShift } from '../../../types/Employee/employee'
import React, { useState } from 'react'
import ShiftModal from './ShiftModal'

interface props {
    id: string
    position: string
    time_from: string
    time_to: string
    num_assigned: number
    num_total: number
    employee: EmployeeShift
}

const ShiftItem = (props: props) => {

    const [modal, setModal] = useState(false)

    const handleCancelModal = () => {
        setModal(false)
    }

    const handleOkModal = () => {
        setModal(false)
    }

    return (
        <>
            <ShiftModal position={props.position} isOpen={modal} cancel={handleCancelModal} ok={handleOkModal} />
                
            <div className="bg-blue-800 rounded-md shadow-md hover:shadow-lg py-5 flex flex-col px-4 text-white hover:bg-blue-600 cursor-pointer"
            onClick={() => {
                setModal(true)
            }}>
                <h1 className="text-xl text-white">
                    { props.position }
                </h1>
                <h3 className="text-white">
                    { props.time_from } - { props.time_to }
                </h3>

                <div>
                    { props.num_assigned }/{ props.num_total } Assigned
                    </div>
            </div>
        </>
    )
}
export default ShiftItem