import React from 'react'
import './Header.scss'  
import { Link } from 'react-router-dom'
import {FaAngleDown} from 'react-icons/fa'
import {GoSearch} from 'react-icons/go'
import {FiShoppingCart} from 'react-icons/fi'
import {FiUser} from 'react-icons/fi'

const Header = () => {
  return (
    <div className='root'>
        <Link to="/" className='header-logo-name'>Logo</Link>
        <Link to="/" className='header-logo-name'>Name</Link>
        <div className='categories'>
        <Link to="/" className='categories-link'>Категории</Link>
        <FaAngleDown className='header-arrow-icon'/>
        </div>
       <div className='contact'>
         <p className='header-contactWords'>связаться с нами</p> 
         <p className='header-contactNumber'>+996(705)45 65 65</p>
       </div>
       <div className='header-buttons'>
       <GoSearch className='header-button'/>
       <FiShoppingCart className='header-button'/>
       <FiUser className='header-button'/>
       </div>
    </div>
  )
}

export default Header