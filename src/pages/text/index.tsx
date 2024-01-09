"use client"
import { useAppContext } from '@/context/context'
import React from 'react'

export default function index() {
    const user=useAppContext();
    console.log(user);
  return (
    <div>{user}</div>
  )
}
