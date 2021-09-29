import { useState } from 'react'
import Sidebar from '../components/Common/Sidebar'
import Activity from '../components/Dashboard/Activity/Activity'
import Navbar from '../components/Common/Navbar'
import Layout from '../components/Common/Layout'
import WorkingCard from '../components/Dashboard/Working/WorkingCard'

const Dashboard = () => {
    return (
        <Layout>
            <div className="flex flex-col gap-6 w-full">
                <Activity />
                <div className="flex flex-row gap-3">
                    <WorkingCard />
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard