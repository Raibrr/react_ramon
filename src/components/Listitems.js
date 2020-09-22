import React, { useEffect, useState, useRef } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import "../App.scss";

function ListItems(props) {
  const [mList, setmList] = useState([]);
  const [change, setChange] = useState([]);
  const { register, errors, handleSubmit, setValue } = useForm();

  //Funcion que maneja el estado de los valores en el formulario
  //Index representa el "name" del input al que se esta haciendo referencia
  const onSubmit = (data, index) => {
    console.log(data[index], index);
    console.log(change);
    setChange({ ...change, [index]: data[index] });
    console.log(change);
  };

  return props.tasks.map((task, index) => {
    //If necesario para que no se multiplique infinitamente el array cada que se itera con el 'setChange'
    if (mList.length < 8) {
      mList.push(task.inModification);
      console.log(mList);
    }

    const label = <span className="font-weight-bold">{task.title}</span>;
    const title = (editing) => {
      return editing ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-control"
            name={`${index}`}
            ref={register}
            defaultValue={change[index]}
          />
          <Row>
            <Col xs="2" className="mr-3">
              <button className="btn btn-primary my-2">Save</button>
            </Col>
            <Col xs="2">
              <button
                className="btn btn-primary my-2"
                onClick={(e) => {
                  //La funcion "handleSubmit" es invocada aqui de esta forma ya que al tener un atirbuto "onClick" dentro del boton el programa
                  //no la manda a llamar xd
                  handleSubmit(onSubmit)(index);
                  props.tasks[index].defaulValue = change[index];
                  //
                  props.tasks[index].inModification = false;
                  setmList(mList.slice(index, 0, false));
                }}
              >
                Cancel
              </button>
            </Col>
          </Row>
        </form>
      ) : (
        <Form.Check
          id={`task${task.id}`}
          type="checkbox"
          defaultChecked={task.checked}
          label={label}
        />
      );
    };

    const buttonEdit = (showEdit) => {
      //El boton "Edit" se muetra en else porque depende del valor de tasks.inModification, el cual tambien es usado para listar el input
      return showEdit ? null : (
        <Button
          onClick={() => {
            //NO sé que vrg hice al 100% pero esta madre jala y al momento del click en 'Edit', el input cambia.
            props.tasks[index].inModification = true;
            setmList(mList.slice(index, 0, true));
          }}
        >
          Edit
        </Button>
      );
    };

    return (
      <ListGroup.Item key={index}>
        <Row>
          <Col xs="8" className="my-auto">
            {title(mList[index])}
          </Col>
          <Col xs="2"> {buttonEdit(mList[index])}</Col>
        </Row>
      </ListGroup.Item>
    );
  });
}

export default ListItems;
