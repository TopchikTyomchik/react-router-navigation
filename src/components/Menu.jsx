import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='mainLayout'>
       <nav>
         <NavLink to='.' >Home</NavLink>
         <NavLink to='courses' >Courses</NavLink>
         <NavLink to='about'>About</NavLink>
         <NavLink to='contacts'>Contacts</NavLink>
       </nav>
    </div>
  )
}

export default Menu