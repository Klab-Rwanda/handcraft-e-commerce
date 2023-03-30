import React from 'react'

const Wishlistcomp = (props) => {
  return (
    <div>
      <div><input type='checkbox'/></div>
      <div><img src={props.imageUrl} alt={props.name} width={'50px'} height={'50px'} /></div>
      <div><h2>{props.name}</h2></div>
      <div><p>{props.price}</p></div>
      <div>icons</div>
    </div>
  )
}

export default Wishlistcomp