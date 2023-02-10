import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, } from 'recharts';


const EmployeesRechart = () => {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    const data2 = [
        { name: 'Group A', value: 100 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 200 },
        { name: 'Group D', value: 200 },
    ];
    //   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div className='flex shadow-2xl justify-between mt-10'>
            <div className=''>
                <div className='border border-black shadow-2xl'>
                    <BarChart width={600} height={600} data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                        <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>
            <div className='border border-black shadow-2xl'>
                <PieChart width={600} height={600}>
                    <Pie data={data2} dataKey="value" cx="50%" cy="50%" outerRadius={110} fill="#82ca9d">
                    </Pie>
                </PieChart>
            </div>
        </div>
    );
};

export default EmployeesRechart;