import React from 'react'

const DepartmentCard = (props) => {
    return (
        <div className='EmployeeCard'>
            <div>Name: {props.name}</div>
            <div>Description: {props.description}</div>
    
        </div>
      )
}

export default DepartmentCard 
