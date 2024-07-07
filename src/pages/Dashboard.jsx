import React from 'react'
import {Appbar} from '../components/AppBar'
import { Users } from '../components/users'

export  function Dashboard() {
  return (
    <div>
        <Appbar  name={localStorage.getItem("email")}/>
        <Users />

      
    </div>
  )
}
