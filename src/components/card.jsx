import styled from "styled-components";
import React from "react";
import Rating from '@material-ui/lab/Rating';

function Card({id,basket,setbasket,price,title,rating,image}) {

    const Addtobasket=()=>{
        setbasket([...basket,{id,price,title,rating,image}]);
    }
    return (
        <Container>
            <Image>
                <img src={image} alt="images"></img>
            </Image>
            <Description>
                <h5>{title}</h5>
                <Rating name="half-rating-read" defaultValue={4.5} precision={rating} readOnly />
                <p> &#x20B9; {price}</p>
                <button onClick={Addtobasket}>Add to cart</button>
            </Description>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
height: 100%;

display: flex;
flex-direction: column;
background: #fff;
z-index: 10;
`;
const Image = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20px;
flex: 0.3;
img{
    width: 200px;
    height: 200px;
}
`;
const Description = styled.div`
width: 90%;
margin: auto;
display: flex;
flex-direction: column;
justify-content: space-evenly;
flex: 0.7;

h5{
 font-size:16px;
 font-weight: 600px;
 margin-top: 0;
 margin-bottom: 0;
}
p{
    font-weight: 600;
    margin-top: 0;
 margin-bottom: 0;
}
button{
    width: 100%;
    height: 33px;
    margin-top: 0;
 margin-bottom: 0;
 border: none;
 border-radius: 33px;
 background-color: #fa8900;
 cursor: pointer;
}
`;

export default Card;