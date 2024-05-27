import React from 'react';

const ShowDepartmentCard = ({ department, onEdit, onDelete }) => {
  return (
    <div className="department-card">
      <h3>{department.departmentName}</h3>
      <p>{department.departmentDescription}</p>
    
    </div>
  
    
  );
};

export default ShowDepartmentCard;
