import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

//import "./styles.css";

function Test() {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Error</label>
      <input
        type="text"
        name="singleErrorInput"
        ref={register({ required: true })}
      />
      {errors.singleErrorInput && <p>Your input is required</p>}

      <label>Error with type check</label>
      <input
        type="text"
        name="multipleErrorInput"
        ref={register({ required: true, minLength: 3 })}
      />
      {errors.multipleErrorInput?.type === "required" && (
        <p>Your input is required</p>
      )}
      {errors.multipleErrorInput?.type === "minLength" && (
        <p>Your input must be larger then 2 characters</p>
      )}

      <label>Error with value</label>
      <input type="number" name="numberInput" ref={register({ min: 50 })} />
      {errors.numberInput && <p>Your input required to be more than 50</p>}

      <input type="submit" />
    </form>
  );
}

export default Test;
