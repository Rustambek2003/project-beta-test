import React, { useEffect } from 'react'
import styled from 'styled-components';



import '../App/App.css'
import CardPost from './CardPost';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../store/actions';
import CreateUsers from './Modal';
import Modal from './Modal';





const AboutWrap = styled.section`
width: 100%;
height: 100%;
background-color:white;


`
const AboutBlock = styled.section`
width: 1440px;
height: auto;
background-color:white;
margin: 0 auto;
display: flex;
  flex-wrap: wrap;
  gap: 30px;
padding-left:30px;
padding-top:50px;
`
const Button = styled.button`
color: #ecf0f1;
 font-size: 17px;
 background-color: #e67e22;
 border: 1px solid #f39c12;
 border-radius: 5px;
 padding: 10px;
 box-shadow: 0px 6px 0px #d35400;
 transition: all .1s;
`

const About = () => {
  const posts= useSelector(state=>state.about.items)
  const dispatch = useDispatch()



  useEffect(()=>{
    dispatch(getPosts())
  },[])

  return (
    <AboutWrap>
        <AboutBlock>
          <Modal/>
      
         {posts.map((post)=>{
         return <CardPost key={post.id} post={post}/>
         })}
          
      </AboutBlock>
    </AboutWrap>
  )
}

export default About
