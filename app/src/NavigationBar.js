import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';


export const NavigationBar = () => {

    
    
    
  

    return(
        <div className="NavigationBar">
            <a src=""> a </a>
            <a src=""> a </a>
            <a src=""> a </a>
            <NavLink to="/task">task</NavLink>
            <NavLink to="/weer">weer</NavLink>
            <NavLink to="/testpage">testpage</NavLink>
        </div>
    )
}

export default NavigationBar