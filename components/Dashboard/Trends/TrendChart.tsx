import React from "react";
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const TrendChart = () => {
    const data = [
        {
          name: 'Feb',
          CovidCase: 4000,
          OnSite: 2400,
          Remote: 2400,
        },
        {
          name: 'Mar',
          CovidCase: 3000,
          OnSite: 1398,
          Remote: 2210,
        },
        {
          name: 'Apr',
          CovidCase: 2000,
          OnSite: 9800,
          Remote: 2290,
        },
        {
          name: 'May',
          CovidCase: 2780,
          OnSite: 3908,
          Remote: 2000,
        },
        {
          name: 'June',
          CovidCase: 1890,
          OnSite: 4800,
          Remote: 2181,
        },
        {
          name: 'July',
          CovidCase: 2390,
          OnSite: 3800,
          Remote: 2500,
        },
        {
          name: 'Aug',
          CovidCase: 3490,
          OnSite: 4300,
          Remote: 2100,
        },
      ];
    return (
        <ResponsiveContainer
            width={600}
            height={300}>
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="bottom"/>
              <Area type="monotone" dataKey="CovidCase" stackId="1" stroke="#8884d8" fill="#8884d8" />
              <Area type="monotone" dataKey="OnSite" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
              <Area type="monotone" dataKey="Remote" stackId="1" stroke="#ffc658" fill="#ffc658" />
            </AreaChart>
        </ResponsiveContainer>
    )
}
export default TrendChart