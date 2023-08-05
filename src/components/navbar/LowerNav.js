import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import search from '../../assets/search.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

const LowerNav = () => {
  return (
    <div className='lower-nav'>
      <Link to='/' className='brand'>
        <img src={logo} alt='logo' style={{ width: '120px' }} />
        <h1 className='logo-name'>Shopcart</h1>
      </Link>
      <div className='mid-left'>

        <select className='categories'>
          <option value='#'>Categories</option>
          <option value='bluetooth'>PC</option>
          <option value='wired'>PS4</option>
          <option value='band'>PS5</option>
        </select>
        <Link to='#'>Deals</Link>
        <Link to='#'>What's New</Link>
        <Link to='#'>Delivery</Link>
      </div>
      <form className='form'>
        <input type='text' placeholder='Search Product' />
        <FontAwesomeIcon icon={faSearch} width='20' className='search-icon' />
      </form>
      <div className='last'>

        <div className='account'>
          <FontAwesomeIcon icon={faUser} className='user-icon' />
          <p>Account</p>
        </div>
        <div className='cart'>
          <FontAwesomeIcon icon={faCartPlus} className='user-icon' />
          <p>Cart</p>
        </div>
      </div>
    </div>
  )
}

export default LowerNav