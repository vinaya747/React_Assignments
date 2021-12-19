
import {React, useRef, useState} from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function Employee() {
  var empDetails = [
    { id: 1, name: "Charlie", job: "Janitor" },   
     { id: 2, name: "Mac", job: "Bouncer" }
  ];

  const [personDetails, updatePersonDetailsFun] = useState(empDetails)

  const nameRef = useRef()
  const jobRef = useRef()
  const addEmp = (e) => {
      e.preventDefault();
      var eid = 1;
      if(personDetails.length !== 0){
        eid = personDetails[personDetails.length-1].id + 1;
      }
      let newEmp = {
          id: eid,
          name: nameRef.current.value,
          job: jobRef.current.value
      }
      updatePersonDetailsFun([...personDetails, newEmp]);
  };

  const deleteEmp = (id) => {
      updatePersonDetailsFun(personDetails.filter(person => person.id !== id));    
      alert(`Employee with id: ${id} is removed from record!`);  
  }

  return (
    <div className="pages">
      
      <Form>
        <h2 className="myform-title col-md-4">Add new employee</h2>
        <Form.Group controlId="formBasicName" className="col-md-4">
          <Form.Label>Name</Form.Label>
          <Form.Control ref={nameRef} type="text" placeholder="Enter name" />
        </Form.Group>
        <br />
        <Form.Group controlId="formBasicJob" className="col-md-4">
          <Form.Label>Job</Form.Label>
          <Form.Control ref={jobRef} type="text" placeholder="Enter job" />
        </Form.Group>
        <br />
        <Form.Group controlId="formBasicJob" className="col-md-4">
          <Button onClick={addEmp} variant="primary" type="button">
            Submit
          </Button>
        </Form.Group>

        <br />
        <br />
      </Form>
      <Table striped hover responsive="sm">
        <thead>
          <tr>
            <th>Emp Id</th>
            <th>Name</th>
            <th>Job</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {/********************************Table data creation******************************************/}
          {personDetails.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.job}</td>
              <td><Button className="delete-btn"  onClick={()=>deleteEmp(person.id)} variant="danger" type="button">
            Delete
          </Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Employee;