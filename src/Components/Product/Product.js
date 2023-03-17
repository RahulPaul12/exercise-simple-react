import React, { useState } from 'react';
import './Product.css'
const Product = (props) => {
    const {first_name, sentence , second , color_hex} = props.product
    const [text, setText] = useState('Add')
    const handleText = (text) => {
        
         setText(text)   }
    const handleAddTime = props.handleAddTime
    return (
        <div className='card'>
            <div className='bg-color' style={{backgroundColor:`${color_hex}`}}></div>
            <h3>{first_name}</h3>
            <p>{sentence}</p>
            <small>time: {second}s</small>
            <button  value="Added" onClick={(e)=>{handleAddTime(second); handleText(e.target.value)}}>{ text}</button>
           
        </div>
    );
};

export default Product;