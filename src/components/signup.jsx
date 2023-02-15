import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const [name,setname] = useState("");
  const navigate = useNavigate();
  function signup(e){
  e.preventDefault();
  fetch("http://localhost:3001/auth/signup", {
    method: "POST",
    body: JSON.stringify({
       email:email,
       password:password,
       name:name
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
  }
).then(response => response.json())
.then(data=>{})
.catch(err=>{console.log(err)});
  }
    return (
        <Container>
            <Logo onClick={()=>navigate("/")}>
                <img src="./amazon.jpg" alt="amazonlogo"></img>
            </Logo>
            <Formcontainer>
                <h3>Sign-Up</h3>
                <InputContainer>
                <p>Name</p>
                <input placeholder="pankaj" onChange={(e)=>{setname(e.target.value)}}></input>
                 <p>Email</p>
                 <input type="email" placeholder="amazon@gmail.com" onChange={(e)=>{setemail(e.target.value)}}/>
                 <p>Password</p>
                 <input type="password" placeholder="*******" onChange={(e)=>{setpassword(e.target.value)}}/>
                </InputContainer>
                <SignupButton onClick={signup}>
                Creat Account in Amazon
                </SignupButton>
                <Infotext>
                  By continuing, you agree to Amazon's <span>Conditions of Use</span> and <span>Privacy</span>
                  Notice .
                </Infotext>
            </Formcontainer>
            <Loginbutton onClick={()=>{navigate("/login")}}>
            Back to Login
            </Loginbutton>
        </Container>
    );
}
const Container = styled.div`
  width : 50% ;
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
height :550px;
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
  font-size:17px;
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
width:50%;
height:35px;
background-color:#f3b414;
border :none;
border-radius: 10px;
margin-top :30px
`;
const Infotext =styled.p`
font-size:15px;
width:100%;
word-wrap:normal;
word-break:normal;
span{
  color:#426bc0;
}
`;
const SignupButton = styled.button`
width:97%;
height:35px;
font-size:12px;
margin-top:20px;

&:hover{
background-color:#dfdfdf;
border:1px solid grey;
}
`;
export default Signup;