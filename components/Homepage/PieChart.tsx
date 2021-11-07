import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

interface props {
    data: any
}

const PieChartComponent = (props: props) => {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div className="w-full border-b">
            <ResponsiveContainer height={400} width="99%">
                <PieChart>
                    <Tooltip />
                    <Pie
                        data={props.data}
                        dataKey="value"
                        innerRadius={70} 
                        outerRadius={150}
                    >
                        {
                            props.data && props.data.map((item: any, index: number) => {
                                return (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                )
                            })
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PieChartComponent
