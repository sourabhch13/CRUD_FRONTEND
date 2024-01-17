import React, { useState } from 'react'
import DepartmentUpdateForm from './DepartmentUpdateForm' ;

const DepartmentCard = (props) => {

    const [updateMode,setUpdateMode] = useState(false)

    const controller = new AbortController();
	const signal = controller.signal;

    const updateParentState = ()=> {
        setUpdateMode(prev => !prev)
    }

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
    
    const p = {key:props.id,...props,updateParentState};
    const updateForm = <DepartmentUpdateForm {...p} />

    const card=<>
        <div className="employee-card">
                <h2>Name: {props.name}</h2>
                <p>Description: {props.description}</p>
                <p>Dept Id: {props.id}</p>  
            </div>
            <div className="sideBar">
            <button className='btn' onClick={handleDelete}>Delete</button>
            <button className='btn' onClick={()=> setUpdateMode(prev => !prev)}>Update</button>
        </div>
    </>
    return (
        <div className='wrapper'>
            {
                updateMode ? updateForm : card
            }
            
        </div>
    );
  };

export default DepartmentCard 
