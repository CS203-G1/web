import { Auth } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";
import { getRemoteAndOnsite } from '../../../services/roster/dashboard/statistics'



const WorkingChart = () => {


    const [data, setData] = useState([
        { name: 'Remote', value: 6 },
        { name: 'On-Site', value: 7 },
    ])

    const getData = async () => {
        const { signInUserSession } = await Auth.currentAuthenticatedUser()
        const jwt = signInUserSession.accessToken.jwtToken
        const res = await getRemoteAndOnsite(jwt)
        let newData = data
        for (let i = 0; i< 2; i++) {
            if (i === 0) {
                newData[i].value = res.remoteCount
            }else {
                newData[i].value = res.onsiteCount
            }
        }        
        setData(newData)
    }

    useEffect(() => {
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [activeIndex, setActiveIndex] = useState(0)

    const color = ["#a78bfa", "#7c3aed"]

    return (
        <PieChart width={200} height={200}>
            <Pie
                activeIndex={activeIndex}
                innerRadius={60}
                outerRadius={80}
                fill="#a78bfa"
                dataKey="value"
                data={data}
            >
                {
                    data && data.map((item, index) => {
                        console.log(item);
                        
                        return (
                            <>

                                <Cell key={ `cell-${index}` } fill={ `${color[index]}` } strokeWidth={ index * 4}  />
                            </>
                        )
                    })
                }
            </Pie>
        </PieChart>
    )
}
export default WorkingChart
