import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Side from '../Side/Side';
import './Main.css'
const Main = () => {
    const [product, setProduct] = useState([]);
    const [count, setCount] = useState(0)
    const [search, setSearch] = useState([])

    const handleSearch =(e)=>{
       
        const searchResult = product.filter(product => product.first_name.toLowerCase().includes(e.target.value.toLowerCase()))
        setSearch(searchResult)
    }
    
    const handleAddTime = (second) => {
            setCount(count + parseInt(second))
   
        }
    useEffect(()=>{
        fetch('./fakedata.json')
        .then(res=> res.json())
        .then(data => {
            setProduct(data)
            setSearch(data)})
    },[])
    return (
        <div className='main'>
            <div className="product">
                <div className="header-text">
                    <div>
                        <h2>ULTRA-ACTIVE-CLUB</h2>
                        <p>Select todays exercise</p>
                     </div>
                        <div className="search">
                            <input type="text" placeholder="Search item" onChange={handleSearch}/>
                     </div>
                </div>
                     <div className="all-product">
                        {
                        search.map(product => <Product product={product}  handleAddTime={handleAddTime} ></Product>)
                     }
                     </div>
                     
            
            </div>

            <Side time={count}></Side>
        </div>
    );
};

export default Main;