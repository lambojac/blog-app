import React from 'react'

const Menu = () => {
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
    <div className='menu'>
     <h1>Other post you may like</h1>
     {posts.map(post=>(
    <div className='post' key={post.id}>
        <img src={post.img} alt=""/>
        <h2>{post.title}</h2>
        <button>Read More</button>
    </div>
     ))}
    </div>
  )
}

export default Menu
