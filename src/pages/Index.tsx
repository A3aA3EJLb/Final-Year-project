// Update this page (the content is just a fallback if you fail to update the page)
// const Index = () => {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
//           <p className="text-xl text-gray-600">Start building your amazing project here!</p>
//         </div>

import React from 'react';
import Header from '@/components/Header';
import UploadSection from '@/components/UploadSection';
import StatsCard from '@/components/StatsCard';
import APMChart from '@/components/APMChart';
import ResourcesChart from '@/components/ResourcesChart';
import ReplayInfo from '@/components/ReplayInfo';
import BuildOrderTable from '@/components/BuildOrderTable';
import Footer from '@/components/Footer';
import { Search, ChartBar, Activity, Database } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col sc2-gradient-bg">
      <Header />
      
      <main className="flex-1 container py-6 space-y-6">
        <h1 className="text-3xl font-bold tracking-tight mb-6">
          SC2 Replay Analysis
        </h1>
        
        <UploadSection />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            title="Average APM"
            value="245"
            icon={<Activity className="h-4 w-4 text-sc2-purple" />}
            description="Your actions per minute"
            trend="up"
            trendValue="15% higher than average"
          />
          <StatsCard
            title="Resource Collection Rate"
            value="1250"
            icon={<Database className="h-4 w-4 text-sc2-bright-blue" />}
            description="Minerals per minute"
            trend="neutral"
            trendValue="Average for your league"
            color="sc2-bright-blue"
          />
          <StatsCard
            title="Supply Blocked"
            value="42s"
            icon={<ChartBar className="h-4 w-4 text-red-500" />}
            description="Total time"
            trend="down"
            trendValue="10% less than previous"
            color="red-500"
          />
          <StatsCard
            title="Scouting Score"
            value="8.5/10"
            icon={<Search className="h-4 w-4 text-green-500" />}
            description="Based on map coverage"
            trend="up"
            trendValue="Great scouting pattern"
            color="green-500"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <APMChart />
          </div>
          <div>
            <ReplayInfo />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ResourcesChart />
          </div>
          <div>
            <BuildOrderTable />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;