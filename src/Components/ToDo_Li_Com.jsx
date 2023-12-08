import React from 'react'
import { ImCancelCircle } from 'react-icons/im';


const ToDo_Li_Com = ({e ,ItemDelet ,id}) => {


    
  return (
    <>
    <div className='flex mt-3'>

    <ImCancelCircle className='m-1 mt-1 ml-2 text-2xl cursor-pointer' onClick={()=>{
        ItemDelet(id)
    }}/>
       <li className='text-2xl'> {e}</li>
    </div>
    </>
  )
}

export default ToDo_Li_Com
