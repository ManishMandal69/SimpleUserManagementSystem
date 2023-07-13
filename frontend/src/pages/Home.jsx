import React, { useEffect, useState } from 'react'
import { publicRequest } from '../axios'
import Table from '../components/Table'

const Home = () => {
  const [data,setData]= useState([])
  useEffect(()=>{
    publicRequest.get("user/getusers").then(res => {setData(res.data)})
  },[]) 

  return (
    <>
    <div className='container my-4'>
      <Table data={data} setData={setData} />
    </div>
    </>
  )
}

export default Home
