import { Auth } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import { getWorkingHistory } from '../../../services/roster/dashboard/statistics'

const AttendanceChart = () => {
  const [data, setData] = useState()

  const ticks = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]

  const getData = async () => {
    const { signInUserSession } = await Auth.currentAuthenticatedUser()
    const jwt = signInUserSession.accessToken.jwtToken
    let res = await getWorkingHistory(jwt)
    for (let i = 0; i< 7; i++) {
      res[i].day = ticks[i]
    }
    setData(res)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
      barCategoryGap="20%"
    >
      <XAxis dataKey="day" axisLine={false} tickLine={false} />
      <YAxis axisLine={false} tickLine={false} />
      <Tooltip />
      <Legend iconType="circle" />
      <Bar dataKey="onsiteCount" fill="#8884d8" />
      <Bar dataKey="remoteCount" fill="#82ca9d" />
    </BarChart>
  )
}

export default AttendanceChart