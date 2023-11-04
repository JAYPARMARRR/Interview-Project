import React, { useState } from "react";

const Login_Functionality_my = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const Submit = (e) => {
    console.log( "formData >>>", formData);
    e.preventDefault();
    const mesej = {};

    if (!formData.name.trim()) {
      mesej.name = "name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      mesej.email = "email is required";
    }

    if (formData.password < 6) {
      mesej.password = "password is required";
    }

    if (!formData.age.trim() || isNaN(formData.age)) {
      mesej.age = "age is required";
    }
    if (Object.keys(mesej).length > 0) setErrors(mesej);
    return;
  };
  

  // 2653 googl folder
  return (
    <form onSubmit={Submit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          
          onChange={handleChange}
        />
        {errors.name && <sapn className="error"> {errors.name} </sapn>}
      </div>
      <div>
        <label>Email:</label>
        <input type="text" name="email" onChange={handleChange} />
        {errors.email && <sapn className="error"> {errors.email} </sapn>}
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} />
        {errors.password && <sapn className="error"> {errors.password} </sapn>}
      </div>
      <div>
        <label>Age:</label>
        <input type="text" name="age" onChange={handleChange} />
        {errors.age && <sapn className="error"> {errors.age} </sapn>}
      </div>
      <button type="submit" className="p-2  bg-slate-400  ">
        Submit
      </button>
    </form>
  );
};

export default Login_Functionality_my;
