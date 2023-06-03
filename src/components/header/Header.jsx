import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Wrapper = styled.section`
  padding: 10px;
  background: #ECF8F9;
 
`;
const Div = styled.section`
width: 1440px;
height: 100%;
margin:0 auto;
 
 display: flex;
 flex-direction: row;
 justify-content: space-evenly;
 
 
`;
const Tittle = styled.h3`
color: #090909;
padding: 0.7em 1.7em;
font-size: 20px;
border-radius: 0.5em;
background: #e8e8e8;
border: 1px solid #e8e8e8;
transition: all .3s;
box-shadow: 6px 6px 12px #c5c5c5,
           -6px -6px 12px #ffffff;
        

           
`;
const Header = () => {
  return (
    <Wrapper>
      <Div>
        <Tittle>
          <Link to="/">Home</Link>
        </Tittle>
        
        <Tittle>
          <Link to="/about">About</Link>
        </Tittle>
        

      </Div>
      
    </Wrapper>
  )
}

export default Header
