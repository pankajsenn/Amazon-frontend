import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Navbar from "./navbar";
function Orders({ basket, setbasket, user,address}) {
    const [orders, setorders] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/orders/get", {
            method: "POST",
            body: JSON.stringify({
                email: user.email
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((res) => {
            return res.json();
        }).then((data) => {
            setorders(data.orderdetails);
        }).catch((err) => { console.log(err) })
    }, [])
    return (
        <Container>
            <Navbar basket={basket} setbasket={setbasket} user={user} />
            <Main>
                <Ordercontainer>
                    <h2>YOur Orders</h2>
                    {

                        orders.map(function (order, index) {
                            return (
                                <OrderDetail key={index}>
                                    <Addresscomponent>
                                        <h4>Shipping Address</h4>
                                        <div>
                                            <p>{order.address.fullname}</p>
                                            <p>{order.address.flat}</p>
                                            <p>{order.address.area}</p>
                                            <p>{order.address.town}  {order.address.state}</p>
                                            <p>Phone : {order.address.phone}</p>
                                        </div>
                                    </Addresscomponent>
                                    <Orderbasket>
                                        <h4>Order</h4>
                                        <p>Subtotal :  &#8377; <span>{order.price}</span> </p>
                                        {

                                            order.products.map(function (product,index) {
                                                return (
                                                    <Product key={index}>
                                                        <Image>
                                                            <img src={product.image} alt="product" />
                                                        </Image>
                                                        <Description>
                                                            <h4>
                                                               {product.title}
                                                            </h4>
                                                            <p>&#8377; {product.price} </p>
                                                        </Description>
                                                    </Product>

                                                )
                                            })
                                        }

                                    </Orderbasket>
                                </OrderDetail>
                            )
                        })
                    }

                </Ordercontainer>
            </Main>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
max-width: 1400px;
background-color: rgb(234,237,237);
height: fit-content;
margin: auto;
`;
const Main = styled.div`
min-height:100vh;
min-width: 100vw;
display: flex;
justify-content: center;
`;
const Ordercontainer = styled.div`
padding: 15px;
background-color: #fff;
width: 95%;
h2{
    font-weight: 500;
    border-bottom:1px solid lightgray;
    padding-bottom:15px;
}
`;
const OrderDetail = styled.div`
border-bottom: 1px solid lightgrey;
padding-bottom: 20px;
`;
const Addresscomponent = styled.div`
margin-top: 20px;
div{
    margin-top: 10px;
    margin-left: 10px;
    p{
        font-size: 14px;
        margin-top: 4px;
    }
}
`;
const Orderbasket = styled.div`
margin-top:20px;
p{
    font-size: 15px;
    margin-left:15px;
    margin-top:15px;
    span{
        font-weight: 700;
    }
}
`;
const Product = styled.div`
display: flex;
align-items: center;
`;
const Image = styled.div`
flex: 0.15;
img{
    width: 100%;
}
`;
const Description = styled.div`
flex: 0.7;
h4{
    font-weight: 600;
    font-size: 18px;
    @media only screen and (max-width:1200px){
        font-size:14px;
    }
}
p{
    font-weight: 700;
    margin-top: 10px;
}
`;
export default Orders;