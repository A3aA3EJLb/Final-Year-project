import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Sample data - in a real app this would come from the replay analysis
const resourcesData = [
  { minute: 1, minerals: 320, gas: 0, enemyMinerals: 280, enemyGas: 0 },
  { minute: 2, minerals: 540, gas: 20, enemyMinerals: 510, enemyGas: 30 },
  { minute: 3, minerals: 780, gas: 90, enemyMinerals: 760, enemyGas: 120 },
  { minute: 4, minerals: 950, gas: 210, enemyMinerals: 1020, enemyGas: 280 },
  { minute: 5, minerals: 1200, gas: 380, enemyMinerals: 1250, enemyGas: 450 },
  { minute: 6, minerals: 1500, gas: 560, enemyMinerals: 1400, enemyGas: 510 },
  { minute: 7, minerals: 1650, gas: 690, enemyMinerals: 1590, enemyGas: 680 },
  { minute: 8, minerals: 1900, gas: 850, enemyMinerals: 1800, enemyGas: 820 },
  { minute: 9, minerals: 2100, gas: 1050, enemyMinerals: 1900, enemyGas: 950 },
  { minute: 10, minerals: 2350, gas: 1200, enemyMinerals: 2150, enemyGas: 1100 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-popover p-3 rounded shadow-md border border-border">
        <p className="text-sm font-medium">{`Minute ${label}`}</p>
        {payload.map((entry: any, index: number) => (
          <p key={`item-${index}`} className="text-xs" style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const ResourcesChart = () => {
  const [activeTab, setActiveTab] = useState("income");
  
  return (
    <Card className="sc2-card">
      <CardHeader>
        <CardTitle className="text-md">Resource Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="income" onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="income">Income</TabsTrigger>
            <TabsTrigger value="spending">Spending</TabsTrigger>
          </TabsList>
          
          <TabsContent value="income" className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={resourcesData}
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
                  label={{ value: 'Resources', angle: -90, position: 'insideLeft', fill: 'rgba(255,255,255,0.5)' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="minerals" 
                  name="Your Minerals" 
                  stroke="#0EA5E9" 
                  strokeWidth={2} 
                  dot={{ r: 2 }} 
                  activeDot={{ r: 6 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="gas" 
                  name="Your Gas" 
                  stroke="#10B981" 
                  strokeWidth={2} 
                  dot={{ r: 2 }} 
                  activeDot={{ r: 6 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="enemyMinerals" 
                  name="Enemy Minerals" 
                  stroke="#0EA5E9" 
                  strokeWidth={2} 
                  strokeDasharray="5 5"
                  dot={{ r: 2 }} 
                  activeDot={{ r: 6 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="enemyGas" 
                  name="Enemy Gas" 
                  stroke="#10B981" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ r: 2 }} 
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="spending" className="h-80">
            <div className="flex h-full items-center justify-center">
              <p className="text-muted-foreground text-center">
                Spending efficiency data would appear here after analyzing the replay
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ResourcesChart;