import React from 'react';

const DepartmentCard = ({ department, onEdit, onDelete }) => {
  return (
    <div className="department-card">
      <h3>{department.departmentName}</h3>
      <p>{department.departmentDescription}</p>
      <div className='btn-container'>
        <button onClick={() => onEdit(department)}>Edit</button>
        <button onClick={() => onDelete(department._id)}>Delete</button>
      </div>
    </div>
  
    
  );
};

export default DepartmentCard;
