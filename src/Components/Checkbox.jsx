import React, { useEffect, useState } from "react";

const userData = [
  {
    name: "jayu",
  },
  {
    name: "Sohil",
  },
  {
    name: "Mrlo",
  },
  {
    name: "KD",
  },
];

const Checkbox = () => {
  const [AllData, setAllData] = useState([]);

  useEffect(() => {
    setAllData(userData);
  }, []);

  const Change = (e) => {
    const { name, checked } = e.target;
    if (name === "AllC") {
      let JJJ = AllData.map((e) => {
        return { ...e, isC: checked };
      });
      setAllData(JJJ)
    } else {
      let JJ = AllData.map((user) =>
        name === user.name ? { ...user, isC: checked } : user
      );
      setAllData(JJ);
    }
  };

  return (
    <div>
      <div>
        <input
          type="checkbox"
          className="h-7 w-7 ml-2 mt-2"
          name="AllC"
          onChange={Change}
          checked={AllData.filter(e => e.isC !== true) < 1 }
        />
        <labe className="ml-2">Main</labe>
      </div>
      <div className="gap-3">
        {AllData.map((e) => {
          return (
            <div>
              <input
                type="checkbox"
                name={e.name}
                className="h-7 w-7 ml-2 "
                checked={e?.isC || false}
                onChange={Change}
              />
              <label className="ml-2"> {e.name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkbox;
