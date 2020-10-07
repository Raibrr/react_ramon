import React from "react";
import { Col, Row, ListGroup, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const InputEdit = ({
  setEdit,
  setText,
  setTextInInput,
  textInInput,
  inputName,
  inputFocus,
}) => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setText(data[inputName]);
    setEdit(false);
  };

  const handelChange = (e) => {
    setTextInInput(e.target.value);
  };
  return (
    <ListGroup.Item>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs="8">
            <input
              type="text"
              className="form-control"
              defaultValue={textInInput}
              onChange={handelChange}
              name={inputName}
              ref={(e) => {
                register(e, { required: true });
                inputFocus.current = e;
                inputFocus.current && e.focus();
              }}
            />
            {errors[inputName] && "Your input is necessary"}
          </Col>
          <Col md="2">
            <Button variant="success" type="submit" name="save">
              Save
            </Button>
          </Col>
          <Col xs="2">
            <Button
              onClick={(e) => {
                setEdit(false);
              }}
              name="cancel"
            >
              Cancel
            </Button>
          </Col>
        </Row>
      </form>
    </ListGroup.Item>
  );
};

export default InputEdit;
