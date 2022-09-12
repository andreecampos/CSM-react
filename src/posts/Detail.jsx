import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'

//import parse from "html-react-parser"
const parse = require ('html-react-parser')

function Detail() {

   
    
    const{id} = useParams()
    //console.log(id)

    const [post, setPost] = useState([])

   useEffect(() => {

  getDetail()
    
   }, []) //eslint-disable-line react-hooks/exhaustive-deps


    const getDetail= async() =>{
        const data = await fetch(`${process.env.REACT_APP_API_URL}/posts/${id}`)
        const info = await data.json()
        //console.log(info)
       
        setPost(info)

    }
   


  return (
    <>
    <div>
       
        {/* <h3 className="title">
            {post && parse(post.title)}
        </h3> */}
        {/* <p  className="paragraph">
        {parse(post.content)}
        </p> */}
        <h3 className="title">
        {post.title && parse(post.title)}
        </h3>
        <p className="paragraph">
        {post.content && parse(post.content)}

        </p>
    
    </div>
    </>
  );
}

export default Detail