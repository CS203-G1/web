import React, { useEffect, useState } from "react"
import Layout from "../components/Common/Layout"
import TinderCard from 'react-tinder-card'

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
            <div className="relative h-full flex flex-col items-center justify-center">
                {
                    tests && tests.map((item, index) => {
                        return (
                            <TinderCard className="absolute">
                                <div className="h-96">
                                    <img src={item.photoUrl} alt=""/>
                                </div>
                            </TinderCard>
                        )
                    })
                }
            </div>
        </Layout>
    )
}

export default Tests