import React from 'react'
import styled from 'styled-components'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';

const Info = styled.div`
opacity:0;
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color:rgba(0,0,0,0.2);
z-index:3;
display:flex;
align-items:center;
justify-content:center;
color:white;
font-weight: 600;
`;

const Container = styled.div`
flex:1;
margin:5px;
min-width:330px;
height: 300px;
display:flex;
align-items:center;
justify-content:center;
background-color:#f5fbfd;
position:relative;
&:hover ${Info}{
    opacity:1;
}
`;
const Circle = styled.div`
width:200px;
height:200px;
border-radius:50%;
background-color:white;
position:absolute;
`;
const Image = styled.img`
height:55%;
z-index:2;
`;

const Coupon = styled.div`

`

const Icon = styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
margin:10px;
transition: all 0.5s ease;
color:lightblue;

&:hover{
    background-color:#e9f5f5;
    transform:scale(1.1);
}
`;

const Product = ({item}) => {
    
 
    return (
        <Container>
            <Circle/>
            <Image src={item.img}/>
            <Info>
                <Coupon>
                    <p>CODE = {item.coupon}</p>
                    <p>PRICE = {item.price}$</p>
                    <p>OFFER = {item.offer}</p>
                    <p>COMPANY NAME = {item.companyName}</p>
                </Coupon>
             <Icon>
                 <button >
              <ShoppingCartSharpIcon/>
              </button>
              </Icon>
           </Info>
        </Container>
    )
}

export default Product
