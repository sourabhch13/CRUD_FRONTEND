import React, { useEffect, useState } from 'react'
import EmployeeCard from './EmployeeCard'

const Employee = () => {

    const [allEmployee,setAllEmployee] = useState([])

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
        <>
            <h1>Employees</h1>
            {employees}
        </>
    )
}

export default Employee;
