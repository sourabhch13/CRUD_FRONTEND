import React from 'react'

import { useState } from 'react';

const EmployeeCard = ({ first_name, last_name, id,email, role }) => {

  const [updateMode,setUpdateMode] = useState(false)

  const controller = new AbortController();
	const signal = controller.signal;

    const handleDelete = ()=> {
        const url= 'http://127.0.0.1:8000/api/v1/employee/'+id;
        fetch(url,{method: 'DELETE',signal})
            .then(res => res.json())
            .then(res =>{
                
            })
            .catch(error=>{
                return;
            }); 
            window.location.reload();
    }

  return (
    <div className='wrapper'>
        <div className="employee-card">
          <h2>Name: {`${first_name} ${last_name}`}</h2>
          <p>Email: {email}</p>
          <p>Role: {role}</p>
          <p>Id: {id}</p>
        </div>
        <div className="sideBar">
        <button className='btn' onClick={handleDelete}>Delete</button>
        <button className='btn' onClick={()=> setUpdateMode(prev => !prev)}>Update</button>
        </div>
    </div>

    
  );
};

export default EmployeeCard;