import { useMutation, gql } from "@apollo/client";
import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const SIGNUP = gql`
  mutation UserSignup($credentials: CredentialsInput!) {
  userSignup(credentials: $credentials) {
    userErrors {
      message
    }
    token
  }
}
`;

export default function Signup() {
  const [signup, { data, loading }] = useMutation(SIGNUP);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const handleClick = () => {
    signup({
      variables: {
        credentials: {
          email,
          password,
          name,
          bio,
        },
      },
    });
  };

  const [error, setError] = useState(null);

  useEffect(() => {
    if (data) {
      if (data.userSignup.userErrors.length) {
        setError(data.userSignup.userErrors[0].message);
      }
      if (data.userSignup.token) {
        localStorage.setItem("token", data.userSignup.token);
      }
    }
  }, [data]);
  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Bio</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </Form.Group>
        {error && <p>{error}</p>}
        <Button onClick={handleClick}>Signup</Button>
      </Form>
    </div>
  );
}
