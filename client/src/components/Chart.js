import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip   } from 'recharts';

const Chart = (props) => {

    function CustomTooltip({ payload, label, active }) {
        // console.log(payload);
        if (active) {
          return (
            <div className="custom-tooltip">
              <p className="label">{`${label} : ${payload[0].value}`}</p>
            </div>
          );
        }
      
        return null;
      }

    return ( 
        <div className="chart">
            <h1>Chart</h1>
            <LineChart width={600} height={400} data={props.data}>
                <Line type="monotone" dataKey="searches" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis />
                <YAxis />
                <Tooltip content={CustomTooltip} />
            </LineChart>
        </div>
     );
}
 
export default Chart;