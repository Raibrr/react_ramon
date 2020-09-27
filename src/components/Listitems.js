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
  const [taskTitle, setTaskTitle] = useState([]);
  const [changeInCancel, setChangeInCancel] = useState([]);
  const { register, errors, handleSubmit, setValue } = useForm({
    mode: "onBlur",
  });

  //Funcion que maneja el estado de los valores en el formulario
  const onSubmit = (data, e) => {
    console.log(changeInCancel);
    //Cauando se hace click en "Sava" se ejecuta SIEMPRE el ELSE porque el boton "sava" NO TIENE EL ATRIBUTO NAME, por tanto el if siempre sale FALSE
    //[e.target.name] esta haciendo referencia a la posicion del boton cancel en el que se esta haciendo click

    const referenceToName = props.tasks[0].user[e.target.id].name;
    if (e.target.name === e.target.id) {
      console.log("se ejecuto cancel");
      setChangeInCancel({
        ...changeInCancel,
        [e.target.id]: data[referenceToName],
      });
    } else {
      console.log("se ejecuto save");
      setTaskTitle({
        ...taskTitle,
        [e.target.id]: data[referenceToName],
      });
      //ChangeInCancel se ejecuta para que cuando se vuelva a hacer click en "Edit" el defaulValue sea lo que se guardo anteriormente
      setChangeInCancel({
        ...changeInCancel,
        [e.target.id]: data[referenceToName],
      });
    }
  };

  const drawInputOrFormcheck = (index, token) => {
    if (token) {
      setmList({
        ...mList,
        [index]: true,
      });
    } else {
      setmList({
        ...mList,
        [index]: false,
      });
    }
  };

  useEffect(() => {
    //Lo que se maneja aqui es el estado de los botones y de el input, es independiente de los valores del array original, SI SE OBTIENEN
    //los valores del array original, pero apartir de aqui los valores son manejados por el estado y se vuelven INDEPENDIENTES
    const numberOfTasks = props.tasks[0].user.length;
    const arrayToItered = props.tasks[0].user;
    for (let i = 0; i < numberOfTasks; i++) {
      mList.push(arrayToItered[i].inModification);
      taskTitle.push(arrayToItered[i].title);
      changeInCancel.push(arrayToItered[i].title);
    }
    //Por alguna razon no se renderizaba el componente despues de que useEffect teminaba asi que llame al cambio de estado
    //para que se renderizara (no se dibujaba label)
    setTaskTitle({ ...taskTitle });
  }, []);

  return props.tasks[0].user.map((task, index) => {
    let label = <span className="font-weight-bold">{taskTitle[index]}</span>;
    const title = (editing) => {
      return editing ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-control"
            type="text"
            name={task.name}
            error={errors[task.name]}
            ref={register({ required: true })}
            defaultValue={changeInCancel[index]}
          />
          {errors[task.name] && <p>Your input is required</p>}
          <Row>
            <Col xs="2" className="mr-3">
              <button
                id={index}
                name={null}
                className="btn btn-primary my-2"
                type="submit"
                onClick={(e) => {
                  handleSubmit(onSubmit)(e);
                  drawInputOrFormcheck(index, false);
                }}
              >
                Save
              </button>
            </Col>
            <Col xs="2">
              <button
                id={index}
                name={index}
                className="btn btn-primary my-2"
                onClick={(e) => {
                  //La funcion "handleSubmit" es invocada aqui de esta forma ya que al tener un atirbuto "onClick" dentro del boton el programa
                  //no la manda a llamar xd
                  handleSubmit(onSubmit)(e);

                  //Funcion que se ejecueta para dibujar el input, "index" es la posicion donde se dio click y "True" es le valor que se manda
                  //para validar un cambio de estado
                  drawInputOrFormcheck(index, false);
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
          name={`index`}
          onClick={() => {
            //Funcion que se ejecueta para dibujar el input, "index" es la posicion donde se dio click y "True" es le valor que se manda
            //para validar un cambio de estado
            drawInputOrFormcheck(index, true);
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
