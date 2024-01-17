import React, { useState } from 'react';

const EmployeeForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    role: '',
    department_id: null,
    manager_id: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
	const controller = new AbortController();
	const signal = controller.signal;

    
	const url= 'http://127.0.0.1:8000/api/v1/employee';
	fetch(url,{
		method: 'POST',
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
		console.log(error)
	}); 

  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
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
        <input type="text" name="department_id" value={formData.manager_id} onChange={handleChange} />
      </label>
      <button className='btn-form' type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;

