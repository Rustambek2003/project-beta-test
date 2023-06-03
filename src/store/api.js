import { apiRoot } from "../components/axios";



export const api = {
    list: (search) => apiRoot.get("/posts",search ? 
    {
        params:{
            title:search,
        }
    }:{}
    ),
    getUser:(userId)=>apiRoot.get('/users/'+ userId),
    delete:(id)=>apiRoot.get('/posts/'+id),
    create:(data)=>apiRoot.post("/posts/",data),
    edit:(id)=>apiRoot.patch("/posts/"+id),
    detail:(id)=>apiRoot.get("/posts/"+id)
     
    

    
}