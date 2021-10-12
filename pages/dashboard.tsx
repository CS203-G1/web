import { useState } from 'react'
import Sidebar from '../components/Common/Sidebar'
import Activity from '../components/Dashboard/Activity/Activity'
import Navbar from '../components/Common/Navbar'
import Layout from '../components/Common/Layout'
import WorkingCard from '../components/Dashboard/Working/WorkingCard'
import AttendanceCard from '../components/Dashboard/Attendance/AttendanceCard'
import RequestCard from '../components/Dashboard/Requests/RequestCard'
import TrendCard from '../components/Dashboard/Trends/Trendcard'
import OnSiteCard from '../components/Dashboard/OnSite/OnSiteCard'

const Dashboard = () => {
    return (
        <Layout header="Dashboard">
            <div className="flex flex-col gap-6 w-full">
                <Activity />
                <div className="flex flex-row flex-wrap gap-3">
                    <WorkingCard />
                    <AttendanceCard />
                    <RequestCard />
                    <TrendCard />
                    <OnSiteCard />
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard