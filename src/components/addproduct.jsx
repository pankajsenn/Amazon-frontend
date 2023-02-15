import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Addproduct() {
    const [title,settitle] = useState("");
    const [imageurl,setimageurl] = useState("");
    const [price,setprice] = useState(0);
    const [rating,setrating] = useState(0);
      
    function addproduct(e){
      e.preventDefault()
      fetch("http://localhost:3001/products/add", {
    method: "POST",
    body: JSON.stringify({
        title: title,
        price: price,
        rating: rating,
        imageurl:imageurl
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then(data=>{})
.catch(err=>{console.log(err)});
    }
    return ( 
        <Container>
            <Logo>
                <img src="./amazon.jpg" alt="amazonlogo"></img>
            </Logo>
            <Formcontainer>
                <h3>Add Products</h3>
                <InputContainer>
                    <p>Title</p>
                    <input onChange={(e)=>{settitle(e.target.value)}} value={title} />
                </InputContainer>
                <InputContainer>
                    <p>ImageURL</p>
                    <input onChange={(e)=>{setimageurl(e.target.value)}} value={imageurl} />
                </InputContainer>
                <InputContainer>
                    <p>Price</p>
                    <input type="number" onChange={(e)=>{setprice(e.target.value)}} value={price} />
                </InputContainer>
                <InputContainer>
                    <p>Rating</p>
                    <input type="number" onChange={(e)=>{setrating(e.target.value)}} value={rating} />
                </InputContainer>
                 <Loginbutton onClick={addproduct}>
                 <Link to={"/"}>Add Products</Link>
                </Loginbutton>
            </Formcontainer>
        </Container>
    )
}
const Container = styled.div`
  width : 40% ;
  min-width : 450px;
  height : fit-content;
  padding :15px;
  margin:auto;
  display : flex;
  flex-direction : column;
  align-items : center;
  `;
const Logo = styled.div`
  width : 150px;
  margin-bottom : 20px;
  img{
    width:100%
  }
  `;

const Formcontainer = styled.form`
border : 1px solid lightgrey;
width :55%;
height :fit-content;
display:flex;
flex-direction:column;
align-items : center;
padding:15px;
h3{
  font-size : 28px;
  font-weight :400;
  line-height:33px;
  align-self :flex-start;
  margin-bottom : 10px;

}
`;
const InputContainer = styled.div`
width:100%;
p{
  font-size:20px;
  font-weight:bold;
}
input{
  width:95%;
  height:40px;
  padding-left:5px;
  border-radius : 5px;
  border : 1px solid lightgrey;
  
  &:hover{
    border: 1px solid orange;
  }
}
`;

const Loginbutton = styled.button`
width:70%;
height:35px;
background-color:#f3b414;
border :none;
border-radius: 10px;
margin-top :30px
`;
export default Addproduct;