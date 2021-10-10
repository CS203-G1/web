import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/Common/Layout'
const Employee = () => {
    const router = useRouter()
    const { slug } = router.query

    return (
        <Layout header="Employee No need wash hands">
            <div>
                
            </div>
        </Layout>
    )
}

export default Employee