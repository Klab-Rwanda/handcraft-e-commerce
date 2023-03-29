import React from 'react'
import './CategoliesNav.css'
import {IoShirtOutline} from 'react-icons/io5'
import {MdSportsHandball} from 'react-icons/md'
import {BiBasketball} from 'react-icons/bi'
import {BiHomeSmile} from 'react-icons/bi'
import {MdOutlineElectricScooter} from 'react-icons/md'
import {MdBabyChangingStation} from 'react-icons/md'
import {FaMotorcycle} from 'react-icons/fa'
import {SiCultura} from 'react-icons/si'
import {BsBook} from 'react-icons/bs'
import {IoFastFoodOutline} from 'react-icons/io5'
import {MdPets} from 'react-icons/md'
import {MdCardTravel} from 'react-icons/md'
import {MdDevicesOther} from 'react-icons/md' 





const CategoliesNav = () => {
  return (
    <div className='categolies-nav'>
      <h1>Categolies</h1>
      <div className='categolies-nav-list'>
       <div> <IoShirtOutline/>  Fashion</div>
       <div><SiCultura/>  Made in rwanda</div>
       <div><MdSportsHandball/>  Sport</ div>
       <div><MdOutlineElectricScooter/>Electronics</div>
       <div><BiHomeSmile/>  Home and garden</div>
       <div>Health and beauty</div>
       <div><BiBasketball/>  Toys and hobbies</div>
       <div><FaMotorcycle/>  Automotive</div>
       <div><MdBabyChangingStation/>  Baby and kids</div>
       <div><BsBook/>  Books and stationery</div>
       <div><IoFastFoodOutline/>  Food and drinks</div>
       <div><MdPets/>  Pets</div>
       <div><MdCardTravel/>  Travel</div>
       <div><MdDevicesOther/>  Other</div>    
      </div>
    </div>
  )
}

export default CategoliesNav