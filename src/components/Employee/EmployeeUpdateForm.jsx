import React, { useState } from 'react';

const EmployeeUpdateForm = ({ first_name, id,last_name, email ,role,department_id, manager_id,updateParentState}) => {
    const [formData, setFormData] = useState({
        first_name: first_name,
        last_name: last_name,
        email: email,
        role: role,
        department_id: department_id,
        manager_id: manager_id,
      });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
	const controller = new AbortController();
	const signal = controller.signal;

	const url= 'http://127.0.0.1:8000/api/v1/employee/'+id;
    
	fetch(url,{
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		signal,
		body: JSON.stringify(formData)
	})
	.then(res => res.json())
	.then(res =>{
		window.location.reload()
	})
	.catch(error=>{
        
	}); 
    window.location.reload()
  };

  return (
    <>
    
    <form className="employee-form" onSubmit={handleSubmit}>
    <button className='form-btn btn' onClick={updateParentState} >X</button>
      <label>
        First Name:
        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required />
      </label>
      <label>
        Last Name:
        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Role:
        <input type="text" name="role" value={formData.role} onChange={handleChange} required />
      </label>
      <label>
        Department ID:
        <input type="text" name="department_id" value={formData.department_id} onChange={handleChange} />
        </label>
		<label >
		Manager ID:
        <input type="text" name="manager_id" value={formData.manager_id} onChange={handleChange} />
      </label>
      <button className='btn-form' type="submit">Update Employee</button>
    </form>
    </>
  );
};

export default EmployeeUpdateForm;

