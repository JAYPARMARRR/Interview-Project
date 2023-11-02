import { useState } from "react";

const Conter = () => {
  const [Conter, setConter] = useState(0);

  const Decrem = () => {
    if (Conter > 0) {
      setConter(Conter - 1);
    } else {
      setConter(0);
      alert("Zero limit");
    }
  };
  const Increm = () => {
    setConter(Conter + 1);
  };

  return (
    <div>
      <div>
        <h1 className="text-4xl">{Conter}</h1>
      </div>
      <div className="">
        <button
          className="border-solid border-2 border-sky-500  p-2  "
          onClick={Increm}
        >
          Increm
        </button>
        <button
          className="border-solid border-2 border-sky-500 p-2"
          onClick={Decrem}
        >
          Decrem
        </button>
      </div>
    </div>
  );
};

export default Conter;
