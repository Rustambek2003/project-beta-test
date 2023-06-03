import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const  HomeWrapp = styled.section`
width: 100%;
padding: 10px;
height: 100%;
background-color: white;
`;
const  BlockDiv = styled.section`
width: 1440px;
height: 700px;
background-color: white;
margin: 0 auto;
display: flex;
gap:50px;
padding-left:400px;
padding-top:25px;






`;
const Card = styled.section`
width: 280px;
height: 300px;
background-color: yellow;
box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
border-radius: 20px;
margin-bottom:25px;


`





const Home = () => {
  const navigate = useNavigate()
  return (
    <HomeWrapp>
       <BlockDiv>
        <div>

        <Card>
          <img onClick={()=>navigate('/about')} style={{width:"280px",height:"300px", borderRadius:"20px"}} src="https://blog.webit.ru/wp-content/uploads/2016/02/5d429b64c3b1f.png" alt="" />
        </Card>
        
        <Card>
          <img onClick={()=>navigate('/about')}  style={{width:"280px",height:"300px", borderRadius:"20px"}} src="https://e-science.space/wp-content/uploads/2022/08/redaguvannja-min-768x768.jpg" alt="" />
        </Card>
        
        </div>
        <div>

        <Card>
          <img onClick={()=>navigate('/about')}  style={{width:"280px",height:"300px", borderRadius:"20px"}} src="https://cdn-edge.kwork.ru/pics/t3/05/450826-1537051705.jpg" alt="" />
        </Card>
        <Card>
          <img onClick={()=>navigate('/about')}  style={{width:"280px",height:"300px", borderRadius:"20px"}} src="https://cdn-edge.kwork.ru/pics/t4/82/151842-1.jpg" alt="" />
        </Card>
        </div>

       </BlockDiv>
      
    </HomeWrapp>
  )
}

export default Home
