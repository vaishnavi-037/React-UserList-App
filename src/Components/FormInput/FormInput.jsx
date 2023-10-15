import { useRef, useState } from "react";
import styles from "./FormInput.module.css";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";

const FormInput = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [formInput, setFormInput] = useState({
  //   username: "",
  //   age: "",
  // });

  const [formError, setFormError] = useState(null);

  // const inputChangeHandler = (id, value) => {
  //   setFormInput((prev) => {
  //     return {
  //       ...prev,
  //       [id]: value,
  //     };
  //   });
  // };

  const closeModal = () => {
    setFormError(null);
  };

  const validateHandler = (input) => {
    const { username, age } = input;
    if (username.trim().length === 0 || age.trim().length === 0) {
      setFormError("Please enter a valid name and age (non-empty values).");
      return true;
    }
    if (+age <= 0) {
      setFormError("Please enter a valid age (> 0).");
      return true;
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (validateHandler({ username: enteredName, age: enteredAge })) return;
    props.onAdd({ username: enteredName, age: enteredAge });
    // setFormInput({
    //   username: "",
    //   age: "",
    // });

    // You can manipulate the DOM without React and yes, I said you shouldn't do that and you typically shouldn't do that
    // but if you just wanna reset the value entered by a user,  it is something you can consider doing.
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <>
      {formError && <Modal content={formError} onClose={closeModal} />}
      <form onSubmit={submitHandler}>
        <Card className={styles.input}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            // value={formInput.username}
            // onChange={(event) =>
            //   inputChangeHandler("username", event.target.value)
            // }
            ref={nameInputRef}
          />

          <label htmlFor="age">Age(Years)</label>
          <input
            type="number"
            id="age"
            // value={formInput.age}
            // onChange={(event) => inputChangeHandler("age", event.target.value)}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </Card>
      </form>
    </>
  );
};

export default FormInput;
