import React from 'react'
import { useParams } from 'react-router-dom';

export default function Userdetails() {
    const dynamic =useParams();
  return (
    <div>
      {dynamic.id==="user1"&&<h1>My Hane is this an i am that</h1>}
      {dynamic.id==="user2"&&<h1>My Abc is this an i am xyz</h1>}
      {dynamic.id==="user3"&&<h1>My XYZ is this an i am ABC</h1>}
      {dynamic.id==="user4"&&<h1>My WHO is this an i am why</h1>}
    </div>
  )
}
