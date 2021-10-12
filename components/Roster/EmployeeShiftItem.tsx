import React, { useEffect } from "react"
import Empty from "./states/Empty"
import Unavailable from "./states/Unavailable"

const EmployeeShiftItem = () => {

    const STATES = {
        empty: <Empty />,
        unavailable: <Unavailable />
    }

    return (
        <>
            {
                STATES.empty
            }
        </>
    )
}

export default EmployeeShiftItem