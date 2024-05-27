import React from 'react';
import '../styles/quicklinkscard.css'; // Import your custom styles for the dashboard
import Addpatients from './addPatient'
import AddDoctors from './addDoctor'
import Addappointments from './addAppointment'
import AddDepartment from './addDepartment'

const Quicklinks = () => {
   
      return (
        <div>

      
            <div className="dashboard-container">
                <div className="quick-links-card">
                    <h2>Quick Actions</h2>
                    <div className="quick-links">
                        <div className="quick-link-card">
                        <Addpatients/>
                        </div>
                        <div className="quick-link-card">
                        <AddDoctors/>
                        </div>
                        <div className="quick-link-card">
                        <Addappointments/>
                        </div>
                        <div className="quick-link-card">
                        <AddDepartment/>
                        </div>
                    </div>
                </div>

            </div>
       

        </div>
    );
};

export default Quicklinks;
