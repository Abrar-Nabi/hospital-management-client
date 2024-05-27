import React from 'react';


import Footer from '../footer';
import '../styles/adminHome.css'; // Your custom styles for the admin dashboard

import Sidebar from './sidebar';
import Dashboard from '../pages/dashboard';
import QuickLinksCard from '../cards/quickLinksCard'

const AdminDashboard = () => {
  return (
    <div className='AdminHome'>
      <div className="admin-dashboard">
        <Sidebar />
        <div className='adminMain'>
          <QuickLinksCard />
          <Dashboard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
