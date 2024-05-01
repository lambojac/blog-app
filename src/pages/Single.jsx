import React from 'react'
import img from "../img/logo.png"
import Menu from "../components/Menu.jsx"
import {Link}from "react-router-dom"
const Single = () => {
  return (
    <div className='single'>
       <div className="content">
     <img src={img} alt=""/>
       
       <div className="user">
       <img src={img} alt=""/>
         
        <div className='info'>
        <span>JOHN</span>
        <p>Posted 2 days ago</p>
        </div>
        <div className="edit">
            <Link to="/write?edit=2">
            <img src={img} alt=""/>
            </Link>
            
        </div>
        <div className="delete">
        <img src={img} alt=""/>
        <div>
            <h1>This is delete button feature</h1>
            <p>delete feature</p>
        </div>
        </div>
        </div>
        </div>
        <Menu />
    </div>
  )
}

export default Single
