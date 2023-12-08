// import React, { useEffect, useState } from 'react'

// const AP_I = () => {

// const [post , setPost]=useState([])

// useEffect (()=>{
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then (res => res.json())
//     .then(data => setPost(data))
//     .catch(error => console.error(error))
// })
//   return (
//     <div>
//      {post.map((e)=>{
//        return(
//         <div>{e.body}</div>
//        )
//      })}
//     </div>  
//   )
// }

// export default AP_I    





// import React, { useEffect, useState } from 'react'
 // import axios from "axios"; 



// const AP_I = () => {

//   const [Post ,setPost]= useState([])


//   // 
  
//   useEffect(()=>{
//     fetch ('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then (data => setPost(data))
//     .catch(error => console.error(error))
//   },[])
  
//   console.log("Post >>>" ,Post);
//   return (
//     <div>
//     {Post.map((e)=>{
//        return(
//         <span>{e.title}</span>
//        )
//     })}
//     </div>  
//   )
// }

// export default AP_I   



import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const AP_I = () => {

    const [data , setdata]= useState([])

useEffect(()=>{

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then( res => res.json() )
    .then(data =>  setdata(data))
    .catch(error => console.error(error))
})


  return (
    <div>
      {data.map((e)=>{
        console.log(e.id)
        return(
          <>
          <h1>{e.id}</h1>
          </>
        )
      })}
    </div>
  )
}

export default AP_I
