import React from 'react'

const EmployeeCard = (props) => {
  return (
    <div className='EmployeeCard'>
        <div>Name: {props.firt_name + ' '+ props.last_name}</div>
        <div>email: {props.email}</div>
        <div>Role: {props.role}</div>
        <div></div>

    </div>
  )
}

export default EmployeeCard
