import React, { useEffect, useState } from "react"
import Layout from "../components/Common/Layout"
import TinderCard from 'react-tinder-card'
import TestApprovalItem from "../components/Tests/TestApprovalItem"

const Tests = () => {

    const [tests, setTests] = useState([
        {
            photoUrl: "https://picsum.photos/200",
        },
        {
            photoUrl: "https://picsum.photos/200",
        }, 
        {
            photoUrl: "https://picsum.photos/200",
        }, 
        {
            photoUrl: "https://picsum.photos/200",
        }, 
        {
            photoUrl: "https://picsum.photos/200",
        }, 
        {
            photoUrl: "https://picsum.photos/200",
        }, 
    ])

    useEffect(() => {

    }, [])
    return (
        <Layout header="Tests">
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 justify-evenly gap-10 py-6">
                {
                    tests && tests.map((item, index) => {
                        return (
                            <TestApprovalItem />
                        )
                    })
                }
            </div>
        </Layout>
    )
}

export default Tests