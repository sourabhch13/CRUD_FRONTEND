import React, { useEffect, useState } from 'react'
import EmployeeCard from './EmployeeCard'
import EmployeeForm from './EmployeeForm'



const Employee = () => {

    const [allEmployee,setAllEmployee] = useState([])
    const [postMode,setPostMode] = useState(false)

    useEffect(()=>{
        const controller = new AbortController();
		const signal = controller.signal;

        const getEmployees= async ()=> {
            const url= 'http://127.0.0.1:8000/api/v1/employee';
            fetch(url,{method: 'GET',signal})
                .then(res => res.json())
                .then(res =>{
                    setAllEmployee(prev => res.data)
                })
                .catch(error=>{
                    console.log("error 💥",error);
                });    
        }
        getEmployees()
    },[])
    
    const employees= allEmployee.map(emp =>{
        const props = {key:emp.id,...emp};
        return <EmployeeCard {...props}/>
    })
    return (
        <div className='card-wrapper'>  
            <div className='header'>
                <h1>Employees</h1>
                <button onClick={()=> setPostMode(prev => !prev)} className={`btn ${postMode ? 'active':''}`}>Add</button>
            </div>
            
            {postMode ? <EmployeeForm/>:employees}
        </div>
    )
}

export default Employee;
