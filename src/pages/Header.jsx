import React, {useState, useEffect} from 'react';
import Posts from '../posts/Posts';


function Header() {
const[header, setHeader] = useState([])
 
useEffect(()=>{
fetch(`${process.env.REACT_APP_API_URL}`)
.then(res => res.json())
.then(data => {
  //console.log(data) 
setHeader(data)})
}, [])
//<img className="image" src={header.logo.url} alt="logo" width={300}/>

  return (

    <>
      <div className="header" > 
       
        <h1 className="welcome">{header.name}</h1>
        <br/>
        <div className="container px-4 text-center">
          <div className="row gx-5">
           <div className="description">
           <h3>{header.description}</h3>

    
    </div>
  </div>
</div>

    </div>
    <Posts />

    </>
  )
}

export default Header
