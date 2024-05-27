import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import DepartmentsPage from './components/pages/DepartmentsPage';
import ShowDepartmentsPage from './components/pages/showdepartment';
import ShowDoctor from './components/pages/ShowDoctor';
import Appointments from './components/pages/Appointments';
import ShowAppointment from './components/pages/ShowAppointment';
import Doctors from './components/pages/Doctors';
import Patients from './components/pages/Patients';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Bookingform from './components/pages/bookAppointment';
import Adminhome from './components/pages/Adminhome';
import Protected from './components/auth/PrivateRoute';
import Allusers from './components/pages/showallusers';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/allusers" element={<Allusers />} />
         <Route path="/AdminHome" element={<Protected Component={Adminhome} />} />
          <Route path="/Department" element={<Protected Component={DepartmentsPage} />} />
          <Route path="/Departments" element={<ShowDepartmentsPage />} />
          <Route path="/doctor" element={<ShowDoctor />} />
          <Route path="/appointments" element={<Protected Component={Appointments} />} />
          <Route path="/showappointment" element={<ShowAppointment />} />
          <Route path="/doctors" element={<Protected Component={Doctors} />} />
          <Route path="/patients" element={<Protected Component={Patients} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Bookyourappointment" element={<Bookingform />} />
          {/* This route catches all other paths and redirects to MainPage */}
          <Route path="*" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
