import { useState} from "react";
import styled from "styled-components";
import { Link, useNavigate,  } from "react-router-dom";
import Navbar from "./navbar";

function Address({basket,setbasket,address,setaddress,user}){
  const [fullname,setfullname] = useState("")
  const [phone,setphone] = useState("")
  const [flat,setflat] = useState("")
  const [area,setarea] = useState("")
  const [landmark,setlandmark] = useState("")
  const [town,settown] = useState("")
  const [state,setstate] = useState("")
  const navigate = useNavigate();
  
    const Deliver=(event)=>{
      event.preventDefault(); 
      setaddress({...address,fullname:fullname,phone:phone,flat:flat,area:area,landmark:landmark,town:town,state:state})
      navigate("/payment");
    }
    return(
        <Container>
            <Navbar basket={basket} setbasket={setbasket} user={user}/>
            <Main>
                <Formcontainer>
                <InputContainer>
                 <p>Full Name</p>
                 <input  placeholder="Pankaj sen" onChange={(e)=>{setfullname(e.target.value)}} value={fullname}/>
                 </InputContainer>
                 <InputContainer>
                 <p>Phone Number</p>
                 <input type="number" placeholder="9179044655" onChange={(e)=>{setphone(e.target.value)}} value={phone}/>
                 </InputContainer>
                 <InputContainer>
                 <p>Flat,House no.,Building,Company,Apartment</p>
                 <input  placeholder="Gujri" onChange={(e)=>{setflat(e.target.value)}} value={flat}/>
                 </InputContainer>
                 <InputContainer>
                 <p>Area,Colony,Street,Sector,Village</p>
                 <input  placeholder="Indore" onChange={(e)=>{setarea(e.target.value)}} value={area}/>
                 </InputContainer>
                 <InputContainer>
                 <p>Landmark</p>
                 <input  placeholder="" onChange={(e)=>{setlandmark(e.target.value)}} value={landmark}/>
                 </InputContainer>
                 <InputContainer>
                 <p>Town/City</p>
                 <input  placeholder="" onChange={(e)=>{settown(e.target.value)}} value={town}/>
                 </InputContainer>
                 <InputContainer>
                 <p>State</p>
                 <input  placeholder="Madhyapradesh" onChange={(e)=>{setstate(e.target.value)}} value={state}/>
                 </InputContainer>
                 
                 <button onClick={Deliver} >Deliver to this Address</button>
                 
                </Formcontainer>
            </Main>
        </Container>
    )
}

const Container= styled.div`
width: 100%;
max-width: 1400px;
height: fit-content;
margin: auto;
background-color:rgb(234,237,237);
position: relative;
`;
const Main =styled.div`
padding: 15px;
`;
const Formcontainer =styled.form`
border: 1px solid lightgray;
width: 55%;
min-width: 400px;
height: fit-content;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 15px;
background-color: #fff;
margin: auto;

button{
    align-self: flex-start;
    background-color: #ffa32a;
    border: none;
    outline: none;
    width:250px ;
    height:35px;
    margin-top:20px;
    cursor:pointer;
    border-radius:5px;
}
`;

const InputContainer = styled.div`
width:100%;
p{
  font-size:16px;
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
export default Address;