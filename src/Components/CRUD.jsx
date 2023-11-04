import React, { useState } from "react";
import ToDo_Li_Com from "./ToDo_Li_Com";

const CRUD = () => {
  const [inputList, setinputList] = useState("");
  const [Item, setItem] = useState([]);

  const itemChang = (e) => {
    setinputList(e.target.value);
  };

  const aDD = () => {
    setItem((e) => {
       
      return [...e, inputList];
    });

    setinputList ("")

  };

  const ItemDelet = (id)=>{
    setItem((e)=>{
        return e.filter((e , index)=>{
            return index !== id

        })
    })
  }
  return (
    <>
      <div>
        <div>
          <h1 className="text-2xl">Todo list </h1>
          <br />
          <input type="text" placeholder="add a ltems" value={inputList} onChange={itemChang} />
          <button
            className="p-2 rounded-md ml-1 border-b-rose-950 bg-slate-400"
            onClick={aDD}
          >
            +
          </button>

          <ol>
            {Item.map((e ,index) => {
              return <ToDo_Li_Com e={e} id={index} ItemDelet={ItemDelet}/>
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default CRUD;
