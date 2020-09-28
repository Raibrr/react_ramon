import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, useHistory } from "react-router-dom";

const FormNewPerfile = (props) => {
  //Realmente no sé bien que hace useHistoty, pero funciona (investigar más)
  //Tiene la virtud de redireccionar la ruta, esto no se podia hacer con un simple Link porque interferia
  //con el funcionamiento de useForm

  let history = useHistory();
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const emailForm = data.email;
    const userNameForm = data.userName;
    console.log(data);
    history.push("/");
    props.postData(userNameForm, emailForm);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <span>User name</span>
      <input
        className="form-control"
        name="userName"
        type="text"
        placeholder="Enter name"
        ref={register({ required: true })}
      />
      {errors.userName && <p>Your input is required</p>}

      <span>Email</span>
      <input
        className="form-control"
        name="email"
        type="email"
        placeholder="Enter email"
        ref={register({ required: true })}
      />
      {errors.email && <p>Your input is required</p>}

      <Button type="submit">Crate</Button>
    </form>
  );
};

export default FormNewPerfile;

/*  */
