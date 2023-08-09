import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange() {
    const { name, value } = event.target;
    setContact((prevName) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevName.lName,
          email: prevName.email
        };
      } else if (name === "lName") {
        return {
          fName: prevName.fName,
          lName: value,
          email: prevName.email
        };
      } else if (name === "email") {
        return {
          fName: prevName.fName,
          lName: prevName.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          autoComplete="off"
          value={contact.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          autoComplete="off"
          value={contact.sName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          autoComplete="off"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
