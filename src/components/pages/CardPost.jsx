
import React, { useEffect,useState } from 'react'
import styled from 'styled-components';
import { api } from '../../store/api';
import { toast } from "react-toastify"


import { useDispatch } from 'react-redux';
import { Spin } from 'antd';
import { Navigate, useNavigate } from 'react-router-dom';



const Card = styled.section`
overflow: hidden;
position: relative;
text-align: left;
border-radius: 0.5rem;
width: 400px;

height: 300px;
border-radius: 30px;
-webkit-box-shadow: 2px 10px 37px 22px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 2px 10px 37px 22px rgba(34, 60, 80, 0.2);
box-shadow: 2px 10px 37px 22px rgba(34, 60, 80, 0.2);
background-color: #fff;
`
const Dismiss = styled.button`
position: absolute;
right: 10px;
top: 10px;
display: flex;
align-items: center;
justify-content: center;
padding: 0.5rem 1rem;
background-color: #fff;
color: black;
border: 2px solid #D1D5DB;
font-size: 1rem;
font-weight: 300;
width: 30px;
height: 30px;
border-radius: 7px;
transition: .3s ease;
background:red;
`
const Image = styled.section`

display: flex;
margin-left: auto;
margin-right: auto;
background-color: #e2feee;
flex-shrink: 0;
justify-content: center;
align-items: center;
width: 3rem;
height: 3rem;
border-radius: 9999px;
animation: animate .6s linear alternate-reverse infinite;
transition: .6s ease;`
const Content = styled.section`
margin-top: 0.75rem;
text-align: center;
`
const Title = styled.section`
color: #066e29;
font-size: 1rem;
font-weight: 600;
line-height: 1.5rem;
`
const Message = styled.p`
margin-top: 0.5rem;
color: #595b5f;
font-size: 0.875rem;
line-height: 1.25rem;
`
const Actions=styled.section`
margin: 0.75rem 1rem;
`
const History = styled.button`
display: inline-flex;
padding: 0.5rem 1rem;
background-color: #1aa06d;
color: #ffffff;
font-size: 1rem;
line-height: 1.5rem;
font-weight: 500;
justify-content: center;
width: 100%;
border-radius: 0.375rem;
border: none;
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`
const Header =styled.section`
padding: 1.25rem 1rem 1rem 1rem;
`

const CardPost = ({post}) => {
  const [loading,setLoading]=useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
    const [author, setAuthor] = useState('')
    const notify = () => toast("Успешно удалено!!!");
    
    console.log(author)
    
     
    const fetchAuthor = async()=>{
      setLoading(false)
      const {data} = await api.getUser(post.userId)
      setAuthor(data)
      
    }
    const deleteItem = async()=>{
      setLoading(false)
      try{
        await api.delete(post.id)

        
         setLoading(true)
        
        setTimeout(() => {
         setLoading(false)
         notify()
         navigate("/about")
        }, 1000);

    }catch(error){
      toast.success("Успешно удалено")
      
    }finally {
      setLoading(true);
    }
   }
    
    useEffect(()=>{
      fetchAuthor()
    },[])
  return (
   <>  

         <Card> 
          {loading ===true?<Spin/>:''}
         <Dismiss onClick={()=>{
          deleteItem()
         }}>×</Dismiss> 
         <Header>   
             <Content>
                <Title></Title> 
                <Message>{author.username}</Message> 
           
                <Message>Title: {post.title}</Message> 
                <Message>Body: {post.body}</Message> 
                </Content> 
                <Actions>
                   <History onClick={()=>navigate(`/edit/${post.id}`)}>will change</History> 
                   
                   </Actions> 
                   </Header> 
          </Card>
   </>
  )
}


export default CardPost

