import React, { useState, useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
import { Form } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";

const SIGNIN = gql`
  mutation UserSignin($credentials: CredentialsInput!) {
  userSignin(credentials: $credentials) {
    userErrors {
      message
    },
    token
  }
}
`;

export default () => {
  const [signin, { data, loading }] = useMutation(SIGNIN);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    signin({
      variables: {
        credentials: {
          email,
          password,
        }
      },
    });
  };

  const [error, setError] = useState(null);

  useEffect(() => {
    if (data) {
      if (data.userSignin.userErrors.length) {
        setError(data.userSignin.userErrors[0].message);
      }
      if (data.userSignin.token) {
        localStorage.setItem("token", data.userSignin.token);
      }
    }
  }, [data]);

  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={email}
            onChange={e => setEmail(e.target.value)}
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

        {error && <p>{error}</p>}
        <Button onClick={handleClick}>Signin</Button>
      </Form>
    </div>
  );
}
