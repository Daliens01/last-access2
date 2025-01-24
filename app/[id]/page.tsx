"use client"
import React from 'react'
import Tables from '../Tables'
import { useParams } from 'next/navigation'

const LastAccess = ()=>{
  const params = useParams<{ id: string}>()
  return (<Tables id={params.id}/>)
  
}

export default LastAccess