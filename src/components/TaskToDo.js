import React, { useState, useRef } from "react";
import { Row, Col, ListGroup, Button } from "react-bootstrap";
import InputEdit from "./InputEdit";

const TaskToDo = ({ titulo, name, inModification }) => {
  const [edit, setEdit] = useState(inModification);
  const [text, setText] = useState(titulo);
  const [textInInput, setTextInInput] = useState(titulo);
  const inputFocus = useRef();

  return !edit ? (
    <ListGroup.Item>
      <Row className="justify-content-between">
        <Col xs="8" className="my-auto offset-md-2">
          <label className="font-weight-bold">{text}</label>
        </Col>
        <Col xs="2">
          <Button
            onClick={() => {
              setEdit(true);
            }}
          >
            Edit
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  ) : (
    <InputEdit
      setEdit={setEdit}
      setText={setText}
      setTextInInput={setTextInInput}
      textInInput={textInInput}
      inputName={name}
      inputFocus={inputFocus}
    />
  );
};

export default TaskToDo;
