import React, { useState } from "react";
import FormInput from "./Components/FormInput/FormInput";
import UserList from "./Components/UserList/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addChangeHandler = (userInput) => {
    setUserList((prev) => [
      { ...userInput, id: Math.random().toString() },
      ...prev,
    ]);
  };
 
  return (
    <>
      <FormInput onAdd={addChangeHandler} />
      <UserList users={userList} />
    </>
  );
}

export default App;
