import React from 'react'

function Header() {
    const user="Jeelan";
    const student={
        regNo:12221234,
        sname:"Jeelan Basha",
    }
  return (
    <div>
        <h1>My first react app</h1>
        <p>Welcome to lpu {user}</p>
        <p>Reg No: {student.regNo}</p>
        <p>Name: {student.sname}</p>
    </div>
    
  )
}

export default Header