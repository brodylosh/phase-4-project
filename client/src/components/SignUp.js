import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);
  const [image, setImage] = useState('');
  const [budget, setBudget] = useState(0);
  const [preapproved, setPreapproved] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const buyer = {
      first_name: firstName,
      last_name: lastName,
      age: age,
      img_url: image,
      budget: budget,
      preapproved: preapproved,
      username: username,
      password: password,
    };
    fetch('/buyers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(buyer),
    }).then((res) => {
      if (res.ok) {
        res.json().then(console.log);
      } else {
        res.json().then(console.log('errors'));
      }
    });
  }

  return (
    <Form className="rounded p-4 p-sm-3 form" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <Form.Control
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control
          placeholder="Image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Budget</Form.Label>
        <Form.Control
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicImage">
        <Form.Label>Preapproved</Form.Label>
        <Form.Check
          type="switch"
          value={preapproved}
          onChange={(preapproved) => setPreapproved(false)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        SignUp
      </Button>
      <br></br>
      <br></br>
      <h4>Already a member?</h4>
      <NavLink to="/">
        <Button>Log In</Button>
      </NavLink>
    </Form>
  );
}

export default SignUp;
