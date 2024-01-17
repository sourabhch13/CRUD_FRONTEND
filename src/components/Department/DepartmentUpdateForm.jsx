import React, { useState } from 'react';

const DepartmentUpdateForm = ({ name, id, description ,updateParentState}) => {
  const [formData, setFormData] = useState({
    name: name,
    description: description
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
	const controller = new AbortController();
	const signal = controller.signal;

    
	const url= 'http://127.0.0.1:8000/api/v1/department/'+id;
    console.log(url)
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
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Description:
        <input type="text" name="description" value={formData.description} onChange={handleChange} />
        </label>
		
      <button className='btn-form' type="submit">Update Department</button>
    </form>
    </>
  );
};

export default DepartmentUpdateForm;

