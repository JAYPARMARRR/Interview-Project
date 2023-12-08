import React from 'react'

const CRUD_my_AddItem = ({e , DeleteItem ,id}) => {
  return (
    <>
    <div className='flex mt-2'>
      <li>{e}</li>  
<button className="p-1 bg-pink-300  ml-2 rounded-md" onClick={()=>{
    DeleteItem(id)
}}>Delete</button>
    </div>
    </>
  )
}

export default CRUD_my_AddItem
