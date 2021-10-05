import { Modal } from "antd"
import React from "react"

interface props {
    visible: boolean
    handleCancel: () => void
    handleOk: () => void
}

const AddEmployeeModal = (props:props) => {
    return (
        <Modal title="Add Employee" visible={props.visible} onCancel={props.handleCancel} onOk={props.handleCancel}>
            
        </Modal>
    )
}
export default AddEmployeeModal