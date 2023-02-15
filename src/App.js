import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import styled from "styled-components";
import Address from "./components/address";
import Checkout from "./components/checkout";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import Payment from "./components/payment";
import {Elements} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js";
import Addproduct from "./components/addproduct";
import Orders from "./components/orders";

const promise = loadStripe("pk_test_51MXi6USGbP93FvlysICEn9dLLhLkmAKudSNbbOVZHEur4a6U2i7SNp5OSqQBBcN3YieiSLxr6u7lm4KB7UU41T7N00oC1cS9IB");
function App() {
  const [basket ,setbasket] = useState([]);
  const [address,setaddress] = useState({});
  const [user,setuser] =useState([]);
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home basket={basket} setbasket={setbasket} user={user} setuser={setuser}/>}/>
          <Route path="/login" element={<Login  user={user} setuser={setuser}/>}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/checkout" element={<Checkout basket={basket} setbasket={setbasket} user={user}/>}/>
          <Route path="/address" element={<Address basket={basket} setbasket={setbasket} address={address} setaddress={setaddress} user={user}/>}/>
          <Route path="/payment" element={<Elements stripe={promise}><Payment basket={basket} setbasket={setbasket} address={address} setaddress={setaddress} user={user}/></Elements>}/>
          <Route path="/addproduct" element={<Addproduct/>}/>
          <Route path="/orders" element={<Orders basket={basket} setbasket={setbasket} user={user} address={address}/>}/>
        </Routes>
      </Container>
    </Router>
  );
}
const Container = styled.div`
width :100vw;
`;
export default App;
