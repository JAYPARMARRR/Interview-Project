import React, { useState } from "react";
import CRUD_my_AddItem from "./CRUD_my_AddItem";

const CRUD_my = () => {
  const [Inputvalue, setInputvalue] = useState("");
  const [AddItem, setAddItem] = useState([]);

  const InputvalueFuc = (e) => {
    setInputvalue(e.target.value);
    
  };

  const AddAItem = () => {
    setAddItem((e) => {
      return [...e, Inputvalue];
    })
  
   
  };


  const DeleteItem =(id)=>{
    setAddItem((e)=>{
      return e.filter((e ,index)=>{
             return index !== id
        })
    })
   
  }

  return (
    <div>
      <div className="ml-2">
        <h1 className="text-2xl mt-6 " >ToDo List</h1>
        <hr />
        <input type="text" placeholder="Add a item" onChange={InputvalueFuc} />
        <button className="p-2 bg-red-400 ml-2 rounded-md" onClick={AddAItem}>
          Add
        </button>

        <div>
          <ol>
            {AddItem.map((e ,index) => {
              return (
                <>
                  <CRUD_my_AddItem e={e} id={index} DeleteItem={DeleteItem} />
                </>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CRUD_my;
