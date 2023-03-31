import React from 'react';
import './Productdisplay.css';
import {BiCartAdd} from 'react-icons/bi';
import {FaCartPlus} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
import {AiFillStar} from 'react-icons/ai';
import {Link} from 'react-router-dom';

function ProductDisplay(props) {
  return (
    <div className="proCards">
      <img src={props.imageUrl} alt={props.name} width={'100%'} height={'80px'} />
      <div className="overview">
  <ul>
    <li>
     <FaCartPlus className="iconx"  /> 
    </li>
    {/* <li>
      <AiOutlineHeart className="iconx" />
    </li> */}
    <li>
     <Link to='/Buy'> <HiOutlineArrowNarrowRight className="iconx" /></Link>
    </li>
  </ul>
</div>
<div className="proDetails">
        <h2>{props.name}</h2>
        <div>
          {Array.from(Array(props.rating), (_, i) => (
            <span className='product-star' key={i}>
               <AiFillStar className="rate" />
            </span>
          ))}
        </div> 
        <p>{props.price} Frw</p>
      </div>
    </div>
  );
}

export default ProductDisplay;

