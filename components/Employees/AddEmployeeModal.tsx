import { Modal, Popover } from "antd"
import React from "react"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { addEmployee } from '../../services/roster/employee/employees'
import { Auth } from "aws-amplify";
interface props {
    visible: boolean
    handleCancel: () => void
    handleOk: () => void
}

type Form = {
    name: string
    email: string
}

const AddEmployeeModal = (props: props) => {

    const schema = yup.object().shape({
        name: yup.string().min(1).max(30).required(),
        email: yup.string().email().required(),
    })

    const { register, getValues, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmitHandler = async (data: Form) => {
        props.handleOk()
    }

    const add = async () => {
        const { signInUserSession } = await Auth.currentAuthenticatedUser()
        const jwt = signInUserSession.accessToken.jwtToken
        const name = getValues('name')
        const email = getValues('email')

        const { user } = await Auth.signUp({
            username: email,
            password: "Password123~:)hehexd",
        })
        // await addEmployee(jwt, ...register("name"))
    }

    return (
        <Modal title="Add Employee" visible={props.visible} onCancel={props.handleCancel} onOk={props.handleCancel} footer={null}>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="flex flex-col gap-3">

                    <div className="flex flex-col">
                        <label htmlFor="">Name of employee</label>
                        <Popover content={errors.name?.message} visible={errors?.name ? true : false} placement="right">
                            <input {...register("name")} className="border-2 rounded-md px-2 py-1 lg:w-1/2" type="text" />
                        </Popover>
                    </div>


                    <div className="flex flex-col">
                        <label htmlFor="">Email</label>
                        <Popover style={{ color: 'white' }} overlayClassName="text-white" content={errors.email?.message} visible={errors?.email ? true : false} color="red" placement="right">
                            <input {...register("email")} className="border-2 rounded-md px-2 py-1 lg:w-1/2" type="text" />
                        </Popover>
                    </div>

                    <div className="flex flex-row justify-end">
                        <button type="submit" className="bg-blue-500 rounded-md px-3 py-1 text-white font-bold" onClick={add}>
                            + Add
                        </button>
                    </div>
                </div>
            </form>
        </Modal>
    )
}
export default AddEmployeeModal