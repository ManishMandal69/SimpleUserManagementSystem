import React, { useEffect, useState } from 'react'
import { publicRequest } from '../axios'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'

const Userform = () => {

  const [user,setUser] = useState({ id:"" , name:"", email:"", phone:""})
  const {query} = useParams()
  const currentUser = useSelector(state=>state.user.currentUser)
  useEffect(()=>{
    if(query==="update"){
      setUser({ id:currentUser.id , name:currentUser.name, email:currentUser.email , phone:currentUser.phone})
    }
  
  },[query])
const handleSubmit=(e)=>{
  e.preventDefault()
  if(query==="create"){
    publicRequest.post("/user/createUser",user).then(res=>console.log(res.data)).catch(err=>console.log(err))
  setUser({id:"" , name:"",email:"",phone:""})
  }else{
    publicRequest.patch(`/user/updateUser/${currentUser._id}`,user).then(res=>console.log(res.data)).catch(err=>console.log(err))
  setUser({id:"" , name:"",email:"",phone:""})
  }
  
}
  return (
    <div className='container mt-5 '>
      <form className="row g-3 w-50 border border-dark rounded px-3 py-3">
      <h3>{query==="create"?"Create User":"Edit User"}</h3>
      <div className="col-md-12">
    <label for="inputEmail4" className="form-label">ID</label>
    <input type="number" className="form-control" id="4655464" value={user.id} onChange={(e)=>{setUser({...user,id:e.target.value})}}/>
  </div>
  <div className="col-md-12">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4" value={user.email} onChange={(e)=>{setUser({...user,email:e.target.value})}}/>
  </div>
  <div className="col-md-12">
    <label for="inputPassword4" className="form-label">Name</label>
    <input type="name" className="form-control" id="inputPassword4" value={user.name} onChange={(e)=>{setUser({...user,name:e.target.value})}}/>
  </div>
  <div className="col-12">
    <label for="number" className="form-label">Phone no.</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value={user.phone} onChange={(e)=>{setUser({...user,phone:e.target.value})}}/>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary" onClick={e=>handleSubmit(e)}>{query==="create"?"Create":"Update"}</button>
  </div>
</form>
    </div>
  )
}

export default Userform
