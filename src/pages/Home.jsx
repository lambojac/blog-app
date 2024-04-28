import React from 'react'
import {Link} from "react-router-dom"
const Home = () => {
const posts=[
{
    id:1,
    title:"This is the first image",
    desc:"it one of the best image ever",
    img:"./img/logo.png"
},
{
    id:2,
    title:"This is the first image",
    desc:"it one of the best image ever",
    img:"./img/logo.png"
},
{
    id:3,
    title:"This is the first image",
    desc:"it one of the best image ever",
    img:"./img/logo.png"
},
{
    id:4,
    title:"This is the first image",
    desc:"it one of the best image ever",
    img:"./img/logo.png"
},
{
    id:5,
    title:"This is the first image",
    desc:"it one of the best image ever",
    img:"./img/logo.png"
}
]
  return (
    <div className='home'>
    <div className='posts'>
    {posts.map((post)=>(
        <div className='post' key={post.id}>
            <div className="img">
            <img src={post.img} alt=""/>
            </div>
            <div className="content">
                <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
                <button>Read More</button>
                </Link>
            </div>
        </div>
    ))}
    </div>
    </div>
  )
}

export default Home
