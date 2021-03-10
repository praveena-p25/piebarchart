import React from 'react';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid,Legend,Tooltip} from 'recharts';
import "./App.css";

const App = () => {
  const data = [
    {name: "Instagram", value:2000},
    {name: "Twitter", value:6000},
    {name: "Telegram", value:9000}

  ]

  return(
  <div style={{ textAlign: "center" }}>
   <h1>Reports</h1>
   <div className="App">
  <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          
          <Tooltip />
        </PieChart>


        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
  </div>
  </div>
  );
};


  export default App;
  
