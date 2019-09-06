import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis  } from 'recharts';

const Chart = (props) => {
    return ( 
        <div className="chart">
            <h1>Chart</h1>
            <LineChart width={600} height={400} data={props.data}>
                <Line type="monotone" dataKey="searches" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis />
                <YAxis />

            </LineChart>
        </div>
     );
}
 
export default Chart;