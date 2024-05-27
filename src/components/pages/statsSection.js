import React from 'react';
import StatsCard from '../cards/StatsCard';
import '../styles/statsSection.css';

const Dashboard = () => {
  return (
    <div className='stats-card-list'>
      <StatsCard title="Patients Served" value="10,000+"  icon={<i class="ri-team-fill"></i>}/>
      <StatsCard title="Experienced Doctors " value="150++" icon={<i class="ri-briefcase-4-fill"></i>}/>
      <StatsCard title="Appointments Scheduled" value="5,000+" icon={<i class="ri-calendar-line"></i>}/>
      <StatsCard title="Total Revenue" value="$20M+" icon={<i class="ri-money-dollar-circle-line"></i>}/>
      
      {/* Add more StatsCard components for other statistics */}
    </div>
  );
};

export default Dashboard;
