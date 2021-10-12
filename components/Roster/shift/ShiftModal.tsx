import { Modal } from 'antd'
import { useState } from 'react'
import ShiftEmployeeItem from './ShiftEmployeeItem'


interface props {
    isOpen: boolean
    position: string
    cancel: () => void
    ok: () => void
}

const ShiftModal = (props: props) => {

    return (
        <Modal visible={props.isOpen} title={props.position} onCancel={ props.cancel } onOk={ props.ok }>
            <div className="flex flex-col gap-1">
                <ShiftEmployeeItem checked={true} />
            </div>
        </Modal>

    )
}
export default ShiftModal