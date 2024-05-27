import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DepartmentCard from '../cards/DepartmentCard';
import '../styles/DepartmentsPage.css'; // Import your DepartmentsPage.css file for styling
import { ToastContainer, toast } from 'react-toastify';
import Sidebar from '../pages/sidebar';
import 'react-toastify/dist/ReactToastify.css';

const DepartmentsPage = () => {
  const [departments, setDepartments] = useState([]);
  const [addFormVisible, setAddFormVisible] = useState(false);
  const [newDepartment, setNewDepartment] = useState({
    departmentName: '',
    departmentDescription: '',
  });
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [refreshFlag, setRefreshFlag] = useState(false); // Add refresh flag

  useEffect(() => {
    axios.get('http://localhost:5000/departments')
      .then(response => setDepartments(response.data))
      .catch(error => console.error('Error fetching departments:', error));
  }, [refreshFlag]); // Refresh when refreshFlag changes

  const handleAddDepartment = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/departments/add', newDepartment)
      .then(response => {
        console.log('Department added:', response.data);
        setRefreshFlag(!refreshFlag); // Toggle refresh flag
        setNewDepartment({ departmentName: '', departmentDescription: '' });
        setAddFormVisible(false);
        toast.success("Department added successfully!", { autoClose: 2000 });
      })
      .catch(error => console.error('Error adding department:', error));
  };

  const handleUpdateDepartment = (id, e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/departments/update/${id}`, selectedDepartment)
      .then(response => {
        const updatedDept = { ...selectedDepartment, _id: id };
        toast.info("Department updated successfully!", { autoClose: 2000 });
        setDepartments(departments.map(department => department._id === id ? updatedDept : department));
        setSelectedDepartment(null);
        setIsEditMode(false); // Switch back to Add mode
      })
      .catch(error => console.error('Error updating department:', error));
  };

  const handleDeleteDepartment = (id) => {
    axios.delete(`http://localhost:5000/departments/delete/${id}`)
      .then(response => {
        console.log(response.data);
        setDepartments(departments.filter(department => department._id !== id));
        toast.error("Department deleted successfully!", { autoClose: 2000 });
      })
      .catch(error => console.error('Error deleting department:', error));
  };

  const handleEditDepartment = (department) => {
    setSelectedDepartment(department);
    setIsEditMode(true); // Switch to Edit mode
    setAddFormVisible(true); // Show form
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (isEditMode) {
      setSelectedDepartment((prevDepartment) => ({
        ...prevDepartment,
        [name]: value,
      }));
    } else {
      setNewDepartment((prevDepartment) => ({
        ...prevDepartment,
        [name]: value,
      }));
    }
  };

  const cancelForm = () => {
    setIsEditMode(false);
    setAddFormVisible(false);
    setNewDepartment({ departmentName: '', departmentDescription: '' });
    setSelectedDepartment(null);
  };

  const showAddForm = () => {
    setAddFormVisible(true);
    setIsEditMode(false);
  };

  return (
    <div className="departments-page">
   
      { addFormVisible ? (
        <div className='department-form'>
          <form onSubmit={isEditMode ? (e) => handleUpdateDepartment(selectedDepartment._id, e) : handleAddDepartment}>
            <h4>{isEditMode ? 'Edit Department' : 'Add New Department'}</h4>
            <input type="text" name="departmentName" placeholder="Department Name" value={isEditMode ? selectedDepartment.departmentName : newDepartment.departmentName} onChange={handleInputChange} required />
            <input type="text" name="departmentDescription" placeholder="Department Description" value={isEditMode ? selectedDepartment.departmentDescription : newDepartment.departmentDescription} onChange={handleInputChange} required />
            <div className='editformBtns'>
              <button type="button" onClick={cancelForm}>Cancel</button>
              <button type="submit">{isEditMode ? 'Update Department' : 'Add Department'}</button>
            </div>
          </form>
        </div>
      ) : (
        null
      )}
      <button className="quick-link-button"  onClick={showAddForm} type="submit">Add Department</button>
    </div>
  );
};

export default DepartmentsPage;
