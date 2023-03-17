import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Side from '../Side/Side';
import './Main.css'
const Main = () => {
    const [product, setProduct] = useState([]);
    const [count, setCount] = useState(0)
    
    
    const handleAddTime = (second) => {
        
            setCount(count + parseInt(second))
            
            
            
        }
    useEffect(()=>{
        fetch('./fakedata.json')
        .then(res=> res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div className='main'>
            <div className="product">
                <div className="header-text">
                    <h2>ULTRA-ACTIVE-CLUB</h2>
                     <p>Select todays exercise</p>
                     </div>
                     <div className="all-product">
                        {
                        product.map(product => <Product product={product}  handleAddTime={handleAddTime} ></Product>)
                     }
                     </div>
                     
            
            </div>

            <Side time={count}></Side>
        </div>
    );
};

export default Main;