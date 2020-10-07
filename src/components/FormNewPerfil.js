import React from "react";
import { useForm } from "react-hook-form";
import { Button, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const FormNewPerfile = ({ postData }) => {
  //Realmente no sé bien que hace useHistoty, pero funciona (investigar más)
  //Tiene la virtud de redireccionar la ruta, esto no se podia hacer con un simple Link porque interferia
  //con el funcionamiento de useForm

  let history = useHistory();
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const { email, userName } = data;
    postData(userName, email);
    history.push("/");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row className="justify-content-center">
        <Col className="align-selfe-center" xs="8">
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
        </Col>
      </Row>
    </form>
  );
};

export default FormNewPerfile;
