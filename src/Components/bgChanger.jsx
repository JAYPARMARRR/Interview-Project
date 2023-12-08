import React, { useState } from "react";



//   stat banavu ne true false kravu ne tarnari thi class chang kravu 


const BgChanger = () => {

const [Changer , setChanger] = useState("white")



  return (
    <div className="h-screen" style={{backgroundColor: Changer}} >
      <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        onClick={()=> setChanger("black")}
      >
        Bblack
      </button>
      <button
        type="button"
        className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
        onClick={()=> setChanger("yellow")}
      >
        yellow
      </button>
      <button
        type="button"
        className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        onClick={()=> setChanger("red")}
      >
        red
      </button>
      <button
        type="button"
        className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        onClick={()=>setChanger("green")}
      >
        green
      </button>
    </div>
  );
};

export default BgChanger;
