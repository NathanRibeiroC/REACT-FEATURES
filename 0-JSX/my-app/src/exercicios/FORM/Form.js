import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: ""
  });

  console.log(formData.employment);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    console.log(formData);
  }

  function handleSubmit(event){
    //prevent refresh our page
    event.preventDefault()
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <br />
      <br />
      {/* EMAIL INPUT */}
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <br />
      <br />
      {/* TEXT AREA */}
      <textarea
        value={formData.comments}
        placeholder="Comments"
        onChange={handleChange}
        name="comments"
      />
      <br />
      <br />
      {/* CHECKBOX INPUT */}
      <input
        type="checkbox"
        id="isFriendly"
        checked={formData.isFriendly}
        onChange={handleChange}
        name="isFriendly"
      />
      <br />
      <br />
      <label htmlFor="isFriendly">Are you friendly?</label>
      {/* RADIO BUTTON INPUT */}
      <fieldset>
        <legend>Current employment status</legend>

        <input
          type="radio"
          id="unemployed"
          name="employment"
          value="unemployed"
          onChange={handleChange}
          //particularty from radio buttons
          checked={formData.employment === "unemployed"}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />
        <br />
        <input 
            type="radio" 
            id="part-time" 
            name="employment"
            value="part-time"
            onChange={handleChange}
            checked={formData.employment === "part-time"}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />
        <br />
        <input 
            type="radio" 
            id="full-time" 
            name="employment" 
            value="full-time"
            onChange={handleChange}
            checked={formData.employment === "full-time"}
        />
        <label htmlFor="full-time">Full-time</label>
        <br />
        <br />
      </fieldset>
      {/* SELECT INPUT */}
      <label htmlFor="favColor">What is your favorite color?</label>
      <select 
        id="favColor" 
        value={formData.favColor} 
        onChange={handleChange} 
        name="favColor"
       >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
    </select>
    <br />
    {/* <input type="submit"/> */}
    <button type="submit">Submit</button>
      <br />
    </form>
  );
}
