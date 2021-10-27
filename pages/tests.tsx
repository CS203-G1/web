import React, { useEffect, useState } from "react"
import Layout from "../components/Common/Layout"
import TinderCard from 'react-tinder-card'
import TestApprovalItem from "../components/Tests/TestApprovalItem"
import { getArts } from '../services/roster/art/Art'
import { ArtItem } from '../types/Art/art'
import { Auth } from "aws-amplify"

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
    const [data, setData] = useState<ArtItem[]>([])
    useEffect(() => {
        Auth.currentAuthenticatedUser().then(user => {
            const jwt = user.signInUserSession.accessToken.jwtToken
            getArts(jwt).then(res => {
                setData(res)
            })
        })
    }, [])
    return (
        <Layout header="Tests">
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 justify-evenly gap-10 py-6">
                {
                    data && data.map((item, index) => {
                        return (
                            <TestApprovalItem
                                photourl={"https://picsum.photos/200"}
                                artId={item.id}
                                employeeId={item.employee.id}
                                employeeName={item.employee.name} />
                        )
                    })
                }
            </div>
        </Layout>
    )
}

export default Tests