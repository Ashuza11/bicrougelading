import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { NEW_PALETTE_COLORS } from '../data';

// Custom Tooltip for Recharts Pie Chart
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="p-2 bg-white border border-gray-300 rounded-md shadow-lg text-sm">
        <p className="font-semibold">{`${data.name}`}</p>
        <p>{`Count: ${data.value}`}</p>
        <p>{`Percentage: ${(payload[0].percent * 100).toFixed(2)}%`}</p>
      </div>
    );
  }
  return null;
};

const MetricCard = ({ title, averageScore, data }) => {
  const filteredData = data.filter(entry => entry.value > 0);
  const totalCount = data.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md border border-gray-200 w-full max-w-sm mx-auto">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="relative w-full h-80 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={filteredData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              fill="#8884d8"
              paddingAngle={3}
              dataKey="value"
              labelLine={false}
              label={({ name }) => `${name.replace('Score ', '')}`}
            >
              {filteredData.map((entry) => (
                <Cell key={`cell-${entry.name}`} fill={NEW_PALETTE_COLORS[parseInt(entry.name.replace('Score ', '')) - 1]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend
              layout="horizontal"
              align="center"
              verticalAlign="bottom"
              wrapperStyle={{ paddingTop: '20px' }}
              formatter={(value) => `Score ${value.replace('Score ', '')}`}
              iconType="circle"
              itemStyle={{ fontSize: '0.9rem', margin: '0 5px' }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-3xl font-bold text-gray-900">
            {averageScore.toFixed(2)} / 5
          </p>
          <p className="text-lg text-gray-600 mt-1">Average Score</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-700">
        Total tests: {totalCount}
      </p>
    </div>
  );
};

export default MetricCard;