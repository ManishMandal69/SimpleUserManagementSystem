import React, { useEffect, useState } from 'react'
import { publicRequest } from '../axios'
import { useParams } from 'react-router'

const ViewUser = () => {
    const [user,setUser] = useState({})
    const {id} = useParams()
    useEffect(()=> {
        publicRequest.get(`user/getuser/${id}`).then(res=>{setUser(res.data)})
    })
  return (
    <div className='container my-4 '>
        <table className="table table-bordered ">
            <tbody>
            <tr>
                <th scope="col">ID</th>
                <td scope="col">{user.id}</td>
                </tr>
                <tr>
                <th scope="col">Name</th>
                <td scope="col">{user.name}</td>
                </tr>
                <tr>
                <th scope="col">Email id</th>
                <td scope="col">{user.email}</td>
                </tr>
                <tr>
                <th scope="col">Phone</th>
                <td scope="col">{user.phone}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ViewUser
