import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

const FormNewPerfile = (props) => {
  //Realmente no sé bien que hace useHistoty, pero funciona (investigar más)
  //Tiene la virtud de redireccionar la ruta, esto no se podia hacer con un simple Link porque interferia
  //con el funcionamiento de useForm

  let history = useHistory();
  const { register, errors, handleSubmit, setValue } = useForm();
  const onSubmit = (data) => {
    const emailForm = data.email;
    const userNameForm = data.userName;
    console.log(data);
    history.push("/");
    props.postData(userNameForm, emailForm);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>User name</Form.Label>
        <Form.Control
          className="form-control"
          name="userName"
          type="text"
          placeholder="Enter name"
          ref={register}
        />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          ref={register}
        />
      </Form.Group>

      <Button type="submit">Crate</Button>
    </Form>
  );
};

export default FormNewPerfile;

/*  */
