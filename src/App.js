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
    defaulValue: "",
  },
  {
    id: 2,
    title: "Título 2",
    inModification: false,
    checked: true,
    defaulValue: "",
  },
  {
    id: 3,
    title: "Título 3",
    inModification: false,
    checked: false,
    defaulValue: "",
  },
  {
    id: 4,
    title: "Título 4",
    inModification: false,
    checked: false,
    defaulValue: "",
  },
  {
    id: 5,
    title: "Título 5",
    inModification: true,
    checked: true,
    defaulValue: "",
  },
  {
    id: 6,
    title: "Título 6",
    inModification: false,
    checked: false,
    defaulValue: "",
  },
  {
    id: 7,
    title: "Título 7",
    inModification: true,
    checked: false,
    defaulValue: "",
  },
];

function ListItems() {
  const [mList, setmList] = useState([]);
  const [change, setChange] = useState([""]);

  const handleChange = (e) => {
    const doChange = (e) => {
      setChange({
        ...change,
        [e.target.name]: e.target.value,
      });
    };

    //Ifs que identifican la procedencia del form, al no contar con "index" como referecia use eso
    if (e.target.name === "form0") {
      doChange(e);
    }

    if (e.target.name === "form1") {
      doChange(e);
    }

    if (e.target.name === "form2") {
      doChange(e);
    }

    if (e.target.name === "form3") {
      doChange(e);
    }

    if (e.target.name === "form4") {
      doChange(e);
    }

    if (e.target.name === "form5") {
      doChange(e);
    }

    if (e.target.name === "form6") {
      doChange(e);
    }
  };

  return tasks.map((task, index) => {
    //If necesario para que no se multiplique infinitamente el array cada que se itera con el 'setChange'
    if (mList.length < 8) {
      mList.push(task.inModification);
    }

    const label = <span className="font-weight-bold">{task.title}</span>;
    const title = (editing) => {
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
            //Seccion de ifs necesaria para que no marque "undefined" al momento de NO asignar un valor al input y pulsar Cancel

            //Tambien en esta zona es donde se modifica el valor de tasks para que en el sigiente render (despues de dar click en "Cancel") se muestre el defaultValue de lo que escribio el usuario
            if (index === 0 && change.form0 === undefined) {
              console.log("change.form0 esta indefinido");
            } else {
              tasks[0].defaulValue = change.form0;
            }

            if (index === 1 && change.form1 === undefined) {
              console.log("change.form1 esta indefinido");
            } else {
              tasks[1].defaulValue = change.form1;
            }

            if (index === 2 && change.form2 === undefined) {
              console.log("change.form2 esta indefinido");
            } else {
              tasks[2].defaulValue = change.form2;
            }

            if (index === 3 && change.form3 === undefined) {
              console.log("change.form3 esta indefinido");
            } else {
              tasks[3].defaulValue = change.form3;
            }

            if (index === 4 && change.form4 === undefined) {
              console.log("change.form4 esta indefinido");
            } else {
              tasks[4].defaulValue = change.form4;
            }

            if (index === 5 && change.form5 === undefined) {
              console.log("change.form5 esta indefinido");
            } else {
              tasks[5].defaulValue = change.form5;
            }

            if (index === 6 && change.form6 === undefined) {
              console.log("change.form6 esta indefinido");
            } else {
              tasks[6].defaulValue = change.form6;
            }

            //Al hacer click en edit muestra el input-text y al hacer click en "Cancel" se oculta el input-texto y se muestra el titulo y check
            tasks[index].inModification = false;
            setmList(mList.slice(index, 0, false));
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
                //NO sé que vrg hice al 100% pero esta madre jala y al momento del click en 'Edit', el input cambia.
                tasks[index].inModification = true;
                setmList(mList.slice(index, 0, true));
              }}
            >
              Edit
            </Button>
          </Col>
          <Col xs="2">{butt(mList[index])}</Col>
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
