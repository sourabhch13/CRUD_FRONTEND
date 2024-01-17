import React from 'react'

const DepartmentCard = (props) => {

    const controller = new AbortController();
	const signal = controller.signal;

    const handleDelete = ()=> {
        const url= 'http://127.0.0.1:8000/api/v1/department/'+props.id;
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
                <h2>Name: {props.name}</h2>
                <p>Description: {props.description}</p>
                <p>Dept Id: {props.id}</p>  
            </div>
            <div className="sideBar">
            <button className='btn' onClick={handleDelete}>Delete</button>
            <button className='btn'>Update</button>
            </div>
        </div>
    );
  };

export default DepartmentCard 
