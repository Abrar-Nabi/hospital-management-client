import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowDepartmentCard from '../cards/showdepartmentcard';
import '../styles/DepartmentsPage.css'; // Import your DepartmentsPage.css file for styling

import Navbar from '../Navbar';
import Footer from '../footer.js';

const DepartmentsPage = () => {
    const [departments, setDepartments] = useState([]);


    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const response = await axios.get('http://localhost:5000/departments');
                setDepartments(response.data);
            } catch (error) {
                console.error('Error fetching departments:', error);
            }
        };

        fetchDepartments();
    }, []);

 

 




    return (
        <>           <Navbar/>
        <h1>Departments</h1>
        <div className="departments-page">
                <div className="departments-container">
                {departments.map(department => (
                    <ShowDepartmentCard key={department._id} department={department} />
                ))}
            </div>  

        
        </div>
        <Footer/>
        </>

    );
};

export default DepartmentsPage;
