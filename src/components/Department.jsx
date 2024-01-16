import React, { useEffect, useState } from 'react'
import  DepartmentCard  from './DepartmentCard'

const Department = () => {

    const [allDepartment,setAllDepartment] = useState([])

    useEffect(()=>{
        const controller = new AbortController();
		const signal = controller.signal;

        const getDepartments= async ()=> {
            const url= 'http://127.0.0.1:8000/api/v1/department';
            fetch(url,{method: 'GET',signal})
                .then(res => res.json())
                .then(res =>{
                    setAllDepartment(prev => res.data)
                })
                .catch(error=>{
                    console.log("error 💥",error);
                });    
        }

        getDepartments()

    },[])
    
    const Departments= allDepartment.map(dep =>{
        const props = {key:dep.id,...dep};
        return <DepartmentCard {...props}/>
    })
    return (
        <>
            <h1>Department</h1>
            {Departments}
        </>
    )
}
export default Department;
