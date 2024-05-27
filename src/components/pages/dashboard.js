import { useEffect, useState } from 'react';
import DashboardCard from '../cards/dashboardCard'; // Assuming you have a Card component
import axios from 'axios';

const Dashboard = ({ totalPatients }) => {

    const [patients, setPatients] = useState([]);
    const [doctors, setdoctors] = useState([]);
    const [appointments, setAppointments] = useState([]);

    useEffect(
        () => {
            axios.get('http://localhost:5000/patients')
                .then(response => setPatients(response.data.length))
                .catch(error =>
                    console.error('Error fetching patients:', error));

            axios.get('http://localhost:5000/doctors')
                .then(response => setdoctors(response.data.length))
                .catch(error => console.error('Error fetching doctors:', error));

            axios.get('http://localhost:5000/appointments')
                .then(response => setAppointments(response.data.length))
                .catch(error => console.error('Error fetching doctors:', error));



        }, []);


    return (
        <div className='adminpatients-section'>



            <DashboardCard
                icon={<i class="ri-group-line"></i>}
                title={"Total Patients"}
                value={patients}

            />
            <DashboardCard
         icon={<i class="ri-briefcase-4-line"></i> }
                title={"Total Doctors"}
                value={doctors}

            />
            <DashboardCard
            icon={ <i class="ri-calendar-line"></i> }
                title={"Total Appointments"}
                value={appointments}

            />



        </div>
    )
};

export default Dashboard;
