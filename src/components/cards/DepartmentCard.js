import React from 'react';

const DepartmentCard = ({ department }) => {
  return (
    <div className="department-card">
      <h3>{department.name}</h3>
      <p>{department.description}</p>
    </div>
  );
};

export default DepartmentCard;
