import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 2 },
  { name: "Feb", value: 4 },
  { name: "Mar", value: 7 },
  { name: "Apr", value: 9 },
  { name: "May", value: 11 },
  { name: "May", value: 2 },
  { name: "May", value: 6 },
  { name: "May", value: 1 },
  { name: "May", value: 8 },
];

const ChartTemplate = ({ className = "", color = "#0090d9", height = 300 }) => {
  return (
    <div style={{ width: "100%", height: height }} className={className}>
      <ResponsiveContainer>
        <AreaChart data={data}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          {/* <XAxis dataKey="name" /> */}
          {/* <YAxis /> */}
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            fill={color}
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartTemplate;
