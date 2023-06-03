import { Button, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { api } from '../../store/api'
import { toast } from 'react-toastify'

const Divwap= styled.section`
width:1400px;
height:500px;

margin:0 auto;
padding-top:40px;
`
const Divblock= styled.section`
width:550px;
height:300px;
margin:0 auto;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`
const Input = styled.input`
background-color: #eee;
border: none;
padding: 1rem;
font-size: 1rem;
width: 500px;
height:20px;
border-radius: 1rem;
color: lightcoral;
box-shadow: 0 0.4rem #dfd9d9;
cursor: pointer;
`
const BlockButton= styled.section`
--color: #560bad;
font-family: inherit;
display: inline-block;
width: 8em;
height: 2.6em;
line-height: 2.5em;
margin: 20px;
position: relative;
overflow: hidden;
border: 2px solid var(--color);
transition: color .5s;
z-index: 1;
font-size: 17px;
border-radius: 6px;
font-weight: 500;
color: var(--color);
text-align:center;
`



const Edit = () => {
  const [detail,setDetail]=useState({})
  const [loading,setLoading]=useState(false)
  
  const notify = () => toast("Success✅");
  const [form,setForm]=useState({
    title:detail.title,
    body:detail.body

  })
  
  const {id}=useParams()
  const getDetail =async()=>{
    try{
      const {data}= await api.detail(id)
      setDetail(data)
      console.log(data)
    }catch(error){
      console.log(error)
    }
    
  
  }
  const onSubmit =async()=>{
    try{
      if(form.body||form.title){
        await api.edit(id,form)
        setLoading(true)

         setTimeout(() => {
         setLoading(false)
         notify()
         
        }, 1000);

        
      }else{
        console.log('asdf')
      }
    }catch{
      console.log('asdf')
    }
  }
useEffect(()=>{
  if(detail.body){
    setForm({title:detail.title,body:detail.body})
  }else{
    getDetail()
  }
},[detail])
    
  return (
    <Divwap>
      
      <Divblock>
      {loading ===true?<Spin/>:''}
        <form 
        onSubmit={e => {
          e.preventDefault()
        
        }}
        >
        <Input type="text" placeholder="title" name="title" className="input" value={form.title}  
         onChange={e=>{
          setForm({ ...form, [e.target.name]: e.target.value })
         }} />
        <Input type="text" placeholder="Body" name="body" className="input" value={form.body}  
          onChange={e=>{
            setForm({ ...form, [e.target.name]: e.target.value })
          }}/>
        </form>
      
        <div>
            <BlockButton onClick={()=>onSubmit()}>Button</BlockButton>
        </div>
     

      </Divblock>
    </Divwap>
  )
}

export default Edit
