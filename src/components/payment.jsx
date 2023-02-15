import styled from "styled-components";
import React from "react";
import Navbar from "./navbar";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";
import { CardElement,useElements,useStripe } from "@stripe/react-stripe-js";

function Payment({basket,setbasket,address,setaddress,user}) {
    let totalsum = 0;
    for(let i=0 ; i<basket.length ;i++){
        totalsum = totalsum + basket[i].price;
    }
    function placeOrders(e){
        e.preventDefault();
        fetch("http://localhost:3001/orders/add",{
            method:"POST",

            body:JSON.stringify({
            products: basket,
            price:totalsum,
            address:address,
            email:user.email
            }),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        basket.length=0;
    }
    const elements = useElements();
    const stripe = useStripe();
    function Deletehandler(product){
      let newBasket = basket.filter((value)=>{
        return value.id!== product.id
      })
       setbasket(newBasket);
      }
    return (
        <Container>
          <Navbar basket={basket} setbasket={setbasket} user={user}/>
          <Main>
          <Reviewcontainer>
            <h2>Review Your Order</h2>
            <Addresscontainer>
            <h5>Shipping Address</h5>
            <div>
                <p>{address.fullname}</p>
                <p>{address.flat}</p>
                <p>{address.area}</p>
                <p>{address.landmark}</p>
                <p>{address.city}</p>
                <p>{address.state}</p>
                <p>{address.phone}</p>
            </div>
            </Addresscontainer>
            <Paymentcontainer>
                <h5>Payment Method</h5>
                <div>
                    <p>Card Details</p>
                    <CardElement/>
                </div>
            </Paymentcontainer>
            <Ordercontainer>
                <h5>Your Order</h5>
                <div>
                {
                basket?.map((product,index) =>(
                     <Product key={index}>
                     <Image>
                        <img src={product.image}  alt="product"/>
                     </Image>
                     <Description>
                        <h4>
                        {product.title}
                        </h4>
                        <p>&#8377; {product.price} </p>
                        <button onClick={()=>{Deletehandler(product)}}>Remove</button>
                     </Description>
                    </Product>
                       ))
                }
                </div>
            </Ordercontainer>
          </Reviewcontainer>
          <Subtotal>
                    <CurrencyFormat renderText={(value)=>(
                    <>
                    <p>
                        Subtotal({basket.length} items )
                        :<strong>{value}</strong>
                    </p>
                    </>
                    )}
                    decimalScale={2}
                    value={totalsum}
                    displayType="text"
                    thousandSeparator={true}
                    prefix={"rupees "}
                    />
                    <button onClick={placeOrders}>
                    <Link to={"/"} style={{ textDecoration: 'none' }}>Place Order</Link>
                    </button>
          </Subtotal>
          </Main>
          
        </Container>
    )
}

const Container = styled.div`
width: 100%;
height: fit-content;
max-width: 1400px;
background-color: rgb(234,237,237);

`;
const Main =styled.div`
padding: 15px;
display: flex;

@media only screen and (max-width:1200px){
    flex-direction: column;
}
`;
const Reviewcontainer = styled.div`
background-color: #fff;
flex: 0.7;
h2{
    font-weight: 500px;
    border-bottom: 1px solid lightgray;
    padding-bottom: 15px;
}
`;
const Addresscontainer=styled.div`
margin-top:20px;
div{
    margin-top: 10px;
    margin-left: 10px;
    p{
        font-size: 14px;
        margin-top:4px;
    }
}
h5{
    font-size: 17px;
}
`;
const Paymentcontainer = styled.div`
margin-top: 15px;
h5{
    font-size: 17px;
}
div{
    margin-top: 15px;
    margin-left:15px;

    p{
        font-size: 14px;
    }
}
`;
const Ordercontainer = styled.div`
margin-top: 15px;
`;
const Product = styled.div`
display: flex;
align-items: center;
`;
const Image = styled.div`
flex: 0.3;
img{
    width: 100%;
}
`;
const Description = styled.div`
flex: 0.7;
h4{
    font-weight: 600;
    font-size: 18px;
}
p{
    font-weight: 600;
    margin-top: 10px;
}
button{
    background-color: transparent;
    color: #1384b4;
    margin-top: 10px;
    border: none;
    outline: none;
    cursor:pointer;
    &:hover{
        text-decoration: underline;
    }
}
`;
const Subtotal = styled.div`
flex:0.3;
background-color: #fff;
height: 200px;
margin-left: 15px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

p{
    font-size: 20px;
}
small{
    display: flex;
    align-items: center;
    margin-top: 10px;
    
    span{
        margin-left: 10px;
    }
}
button{
        width: 65%;
        height: 33px;
        background-color: #ffd814;
        margin-top: 20px;
        border: none;
        outline: none;
        border-radius: 8px;
    }

    @media only screen and (max-width:1200px){
     flex: none;
     margin-top: 20px;
    }
`
;
export default Payment;