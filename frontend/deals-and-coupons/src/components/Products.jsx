
import styled from 'styled-components'
import Product from './Poduct';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Container = styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`

const Products = () => {
    const [coupon, setCoupon] = useState([]);
    
    useEffect(() => {
        
        axios
        .get("http://localhost:8083/coupon/findall")
        .then(({ data }) => {
            setCoupon(data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);
    
    
    
    return (
        <Container>
             { coupon.map(item => (
           <Product item={item} key={item.id}
                  coupon={item.coupon}
                  price={item.price}
                  offer={item.offer}
                  companyName={item.companyName}
                />
          )) }
             
        </Container>
    
        )
}
    
    
    export default Products;