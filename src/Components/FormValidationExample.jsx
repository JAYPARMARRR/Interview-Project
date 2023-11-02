import React, { useState } from "react";
import '../Style/FormValidationExample.css'
const FormValidationExample = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Name validation: Required field
    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }

    // Email validation: Required and valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      validationErrors.email = "Valid email is required";
    }

    // Age validation: Required and must be a number
    if (!formData.age.trim() || isNaN(formData.age)) {
      validationErrors.age = "Age must be a number";
    }

    // Password validation: Required and minimum length of 6 characters
    if (formData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long";
    }

    // If there are validation errors, set the state with errors and return
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If no errors, form submission logic can be placed here
    console.log("Form submitted successfully:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <label>Age:</label>
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        {errors.age && <span className="error">{errors.age}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormValidationExample;
