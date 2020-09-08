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
import "./App.scss";

const tasks = [
  {
    id: 1,
    title: "Título 1",
    inModification: false,
    checked: false,
    buttonCancel: false,
    defaulValue: "",
  },
  {
    id: 2,
    title: "Título 2",
    inModification: false,
    checked: true,
    buttonCancel: false,
    defaulValue: "",
  },
  {
    id: 3,
    title: "Título 3",
    inModification: false,
    checked: false,
    buttonCancel: false,
    defaulValue: "",
  },
  {
    id: 4,
    title: "Título 4",
    inModification: false,
    checked: false,
    buttonCancel: false,
    defaulValue: "",
  },
  {
    id: 5,
    title: "Título 5",
    inModification: true,
    checked: true,
    buttonCancel: false,
    defaulValue: "",
  },
  {
    id: 6,
    title: "Título 6",
    inModification: false,
    checked: false,
    buttonCancel: false,
    defaulValue: "",
  },
  {
    id: 7,
    title: "Título 7",
    inModification: true,
    checked: false,
    buttonCancel: false,
    defaulValue: "",
  },
];

function ListItems() {
  const [mList, setmList] = useState([]);
  const [showButt, setshowButton] = useState([]);
  const [change, setChange] = useState([""]);
  const [defaul_value, setDefault_value] = useState([]);

  const handleChange = (e) => {
    if (e.target.name === "form0") {
      setChange({
        ...change,
        [e.target.name]: e.target.value,
      });
      console.log(e.target.name, "Deve decir form0");
    }
  };

  //const ref = useRef(null);
  console.log(mList);

  return tasks.map((task, index) => {
    //If necesario para que no se multiplique infinitamente el array cada que se itera con el 'setChange'
    if (mList.length < 8) {
      mList.push(task.inModification);
    }
    showButt.push(task.buttonCancel);
    console.log(mList);

    if (index === 0 && change.form0 === "") {
    }

    const label = <span className="font-weight-bold">{task.title}</span>;
    const title = (editing) => {
      console.log(task.defaulValue);
      return editing ? (
        <input
          className="form-control"
          name={`form${index}`}
          onChange={handleChange}
          defaultValue={task.defaulValue}
          //ref={ref}
          id={`form${index}`}
        />
      ) : (
        <Form.Check
          id={`task${task.id}`}
          type="checkbox"
          defaultChecked={task.checked}
          label={label}
        />
      );
    };

    const butt = (show) => {
      return show ? (
        <Button
          onClick={() => {
            console.log(`${change.form}${index}`);
            let contForm = change.form;
            tasks[0].defaulValue = `${change.form0}`;
            /* defaul_value.push(contForm);
            console.log(defaul_value);
            setDefault_value(defaul_value); */

            //Es necesario cambiar el estado a un objeto vacio para reiniciar el valor de change y poder acceder a el en distintas iteraciones
            //setChange({});
            console.log(contForm);

            //Al hacer click en edit muestra el input-text
            tasks[index].inModification = false;
            setmList(mList.slice(index, 0, false));

            //Al hacer click en cancel oculta el boton cancel y el input-text
            tasks[index].buttonCancel = false;
            setshowButton(showButt.splice(index, 0, false));
          }}
        >
          Cancel
        </Button>
      ) : null;
    };

    return (
      <ListGroup.Item key={index}>
        <Row>
          <Col xs="8" className="my-auto">
            {title(mList[index])}
          </Col>
          <Col xs="2">
            <Button
              onClick={() => {
                console.log(mList[index]);
                //NO sé que vrg hice al 100% pero esta madre jala y al momento del click en 'Edit', el input cambia.
                tasks[index].inModification = true;
                setmList(mList.slice(index, 0, true));

                tasks[index].buttonCancel = true;
                setshowButton(showButt.splice(index, 0, true));
              }}
            >
              Edit
            </Button>
          </Col>
          <Col xs="2">{butt(showButt[index])}</Col>
        </Row>
      </ListGroup.Item>
    );
  });
}

const App = () => (
  <Container fluid>
    <Row>
      <Col xs="8" className="mx-auto mt-3">
        <Card>
          <Card.Title className="text-center">
            <h3 className="mt-3">TODO Tasks</h3>
          </Card.Title>
          <Card.Body>
            <ListGroup>
              <ListItems />
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default App;
