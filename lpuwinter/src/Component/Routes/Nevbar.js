import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './nevbar.css'
export default function Nevbar() {
  return (
    <div>
      <ul>
        {/* <li><link to='/'/>Home</li>
        <li><link to='/about'/>About</li>
        <li><link to='/Contact'/>Contact</li>
        <li><link to='/user'/>User</li> */}
        <li><NavLink to='/'/>Home</li>
        <li><NavLink to='/about'/>About</li>
        <li><NavLink to='/Contact'/>Contact</li>
        <li><NavLink to='/user'/>User</li>
      </ul>
    </div>
  )
}
