import React, { useState } from 'react'
import { api } from '../../store/api'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Spin } from 'antd';
import { toast } from "react-toastify"
import "../App/App.css"
import styled from 'styled-components';
// import { toast } from "react-toastify"
import { Status } from './Status';


 

const Button = styled.section`
position: relative;
width:30px;
  margin: 0;
  padding: 17px 35px;
  outline: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  background-color: #fff;
  border: 1px solid rgba(22, 76, 167, 0.6);
  border-radius: 10px;
  color: #1d89ff;
  font-weight: 400;
  font-family: inherit;
  z-index: 0;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
`
const Div = styled.section`
width: 200px;
  height: 300px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align:center;

`
const H2= styled.h3`
font-size:30px;
color:red;
`

const Modal = () => {
  
  const [isOpen,setIsOpen]= useState(false)
  const [success,setSuccess]=useState(false)
  
  const formik = useFormik({
    initialValues: {
      title: '',
      email: '',
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string().email(<h4 style={{color:"red"}}>Invalid email address or Title</h4>).required('Required'),
    }),
    onSubmit: (values,{resetForm}) => {
      console.log(values)
     
      resetForm()
      
      apiPost()
      setSuccess(true)
      
    }
   
  
  });
  const notify = () => toast("Успешно!!!");
  const apiPost =async()=>{
    
    
    try{
      await api.create(formik.values)
      
      // toast('success')
     setIsOpen(false)
     notify()
     
     setSuccess(false)
      
    }catch(error){
     
      
      
    }
  }
 
  const openModal =()=>{
    setIsOpen(true)
  }
  const closeModal=()=>{
    setIsOpen(false)
  }

  
  return (
    <Div>
    
    
    <button onClick={openModal}>Create</button>
    {success===true?<Spin>Loading...</Spin>:''}

    {isOpen && (
      <div className="modal">
        <span className="close" onClick={closeModal}><H2>x</H2></span>
        <div className="modal-content">
         <form onSubmit={formik.handleSubmit}>
         <input className='input' name='title' type="text" placeholder='Title'onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.title}/>
             {formik.touched.title && formik.errors.title ? (
         <div>{formik.errors.title}</div>
       ) : null}
          <input className='input' name='email' type="email" placeholder='Email' onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}/>
          {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
          <button type='submit'>add</button>
          
         </form>
        </div>
      </div>
    )}
  </Div>
  )
}

export default Modal
