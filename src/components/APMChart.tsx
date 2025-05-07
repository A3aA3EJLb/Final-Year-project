import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Sample data - in a real app this would come from the replay analysis
const apmData = [
  { minute: 1, playerAPM: 65, avgAPM: 45 },
  { minute: 2, playerAPM: 90, avgAPM: 50 },
  { minute: 3, playerAPM: 110, avgAPM: 60 },
  { minute: 4, playerAPM: 180, avgAPM: 70 },
  { minute: 5, playerAPM: 165, avgAPM: 80 },
  { minute: 6, playerAPM: 140, avgAPM: 90 },
  { minute: 7, playerAPM: 210, avgAPM: 95 },
  { minute: 8, playerAPM: 250, avgAPM: 100 },
  { minute: 9, playerAPM: 230, avgAPM: 105 },
  { minute: 10, playerAPM: 260, avgAPM: 110 },
  { minute: 11, playerAPM: 290, avgAPM: 115 },
  { minute: 12, playerAPM: 270, avgAPM: 120 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-popover p-3 rounded shadow-md border border-border">
        <p className="text-sm font-medium">{`Minute ${label}`}</p>
        <p className="text-xs text-sc2-purple">{`Your APM: ${payload[0].value}`}</p>
        <p className="text-xs text-sc2-bright-blue">{`Avg APM: ${payload[1].value}`}</p>
      </div>
    );
  }

  return null;
};

const APMChart = () => {
  return (
    <Card className="sc2-card">
      <CardHeader>
        <CardTitle className="text-md">Actions Per Minute (APM)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={apmData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis 
                dataKey="minute" 
                stroke="rgba(255,255,255,0.5)"
                label={{ value: 'Game Time (minutes)', position: 'insideBottom', offset: -5, fill: 'rgba(255,255,255,0.5)' }} 
              />
              <YAxis 
                stroke="rgba(255,255,255,0.5)" 
                label={{ value: 'APM', angle: -90, position: 'insideLeft', fill: 'rgba(255,255,255,0.5)' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="playerAPM" 
                name="Your APM" 
                stroke="#8B5CF6" 
                strokeWidth={2} 
                dot={{ r: 4, strokeWidth: 2 }} 
                activeDot={{ r: 6, stroke: "#8B5CF6", strokeWidth: 2, fill: "#8B5CF6" }}
              />
              <Line 
                type="monotone" 
                dataKey="avgAPM" 
                name="Avg. APM (Your League)" 
                stroke="#0EA5E9" 
                strokeWidth={2} 
                dot={{ r: 4, strokeWidth: 2 }} 
                activeDot={{ r: 6, stroke: "#0EA5E9", strokeWidth: 2, fill: "#0EA5E9" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default APMChart;