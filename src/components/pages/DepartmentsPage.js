import React from 'react';
import Navbar from '../Navbar';
import DepartmentCard from '../cards/DepartmentCard';
import Footer from '../footer';
import '../styles/DepartmentsPage.css'; // Import your DepartmentsPage.css file for styling

const DepartmentsPage = () => {
  
  const departments = [
    { name: 'Cardiology', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Obstetrics', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Obstetrics', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Obstetrics', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Obstetrics', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Obstetrics', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Obstetrics', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Obstetrics', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },

  ];

  return (
    <div className="departments-page">
      <Navbar />

      <div className="departments-container">
        {departments.map((department, index) => (
          <DepartmentCard key={index} department={department} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default DepartmentsPage;
