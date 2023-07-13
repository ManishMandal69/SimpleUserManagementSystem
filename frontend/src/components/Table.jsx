import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { publicRequest } from '../axios'
import { setUser } from '../redux/reducers/User';
import { useDispatch } from 'react-redux'

const Table = ({data ,setData}) => {

  const handleDelete = (id)=>{
    publicRequest.delete(`user/deleteuser/${id}`).then(res=>{setData(data.filter(d => d._id !== id))})
  }
  const dispatch = useDispatch()
  const handleUpdate =(d)=>{
    dispatch(setUser(d))
  }

  return (
    <div>
      <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Sr No</th>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th className='text-center' scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map((d,index)=>
      <tr>
      <th scope="row">{index+1}</th>
      <td>{d.id}</td>
      <td>{d.name}</td>
      <td className='d-flex justify-content-center gap-2'>
      <button className='btn btn-primary'><Link className="nav-link" to={`/viewuser/${d._id}`}>View</Link></button>
      <button className='btn btn-success' onClick={()=>handleUpdate(d)}><Link className="nav-link" to="/form/update">Update</Link></button>
      <button className='btn btn-danger' onClick={()=>handleDelete(d._id)}>Delete</button>
      </td>
    </tr>
      )
    }
  </tbody>
</table>
    </div>
  )
}

export default Table
