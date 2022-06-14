import { prependOnceListener } from "process";
import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData,setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if(firstName.length > 0 && lastName.length > 0){
      const formData = {
        firstName: firstName,
        lastName: lastName,
      };
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);
    setFirstName("")
    setLastName("") 
    }else{
      setErrors(["Please fill in all fields"])
    }

  }
  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input 
          type="text" 
          onChange={handleFirstNameChange} 
          value={firstName}/>
      <input 
          type="text" 
          onChange={handleLastNameChange} 
          value={lastName}/>
      <button type="submit">Submit</button>
    </form>
    {errors.length > 0
      ? errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))
      : null}
    <h3>Submissions</h3>
    {listOfSubmissions}
    </>
  );
}

export default Form;
