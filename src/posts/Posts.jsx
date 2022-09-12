import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

//import parse from "html-react-parser"
const parse = require('html-react-parser')



function Posts() {

 const [info, setInfo] = useState([])


 useEffect(()=>{
      fetch(`${process.env.REACT_APP_API_URL}/posts`)
      .then(res => res.json())
      .then(data => {
        //console.log(data.posts.map(posts => (posts.title)))
        //console.log(data.posts)
        setInfo(data.posts)})
      
    }, [])
  
   /*
    {posts.length > 0 && posts.map(post => {
        return <div key={posts.id}>
          <h1>{post.title.rendered}</h1>
          {parse(post.content.rendered)}
        </div>
      })}
   */

  return (

    <>


    <div >
      {info && info.map(item => {
        return (
          <div key={item.ID}>
            <h2 className="title">
                <Link to={`/posts/${item.ID}`}>
                      {parse(item.title)}
                      
                </Link>
                
            </h2>

            <p className="paragraph">{parse(item.content)}</p>
            

          </div>
        )
      })}
    </div>
    
    </>
  );
}

export default Posts