import { Auth } from 'aws-amplify'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Layout from '../../components/Common/Layout'
import { getEmployee } from '../../services/employees/employees'

const Employee = () => {
    const router = useRouter()
    const { slug } = router.query

    const [employeeDetails, setEmployeeDetails] = useState()

    const employee = async () => {
        const { signInUserSession } = await Auth.currentAuthenticatedUser()
        const jwt = signInUserSession.accessToken.jwtToken
        const res = await getEmployee(jwt, "49c13ace-ca48-44bb-a9e9-8e3c330862db", slug as string)
        setEmployeeDetails(res)
    }

    // useEffect(() => {
    //     employee()
    // }, [])

    return (
        <Layout header="Employee No need wash hands">
            <div>
                
            </div>
        </Layout>
    )
}

export default Employee