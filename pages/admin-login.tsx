import { Formik, Field, Form } from "formik";

const AdminLogin = () => {
    return (
        <div className="h-screen flex flex-row">
            <div className="h-full w-96 bg-blue-100">

            </div>

            <div className="h-full flex-1 bg-gray-100 flex flex-col justify-center items-center">
                <div className="flex flex-col gap-3">
                    <h1 className="text-3xl font-bold">
                        Sign in to CS203
                    </h1>

                   <form action="submit">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">
                                Email
                            </label>
                            <input type="email" className="" />
                        </div>
                   </form>
                </div>
            </div>
        </div>
    )
}
export default AdminLogin