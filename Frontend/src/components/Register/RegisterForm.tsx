import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { handleRegister } from "../../services/authServices";
import { REGISTER } from "../../constants/HEADINGS";
import { ALREADY_REGISTERED } from "../../constants/MESSAGES";

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  return (
    <Form>
      <Form.Group controlId="formUsername">
        <Form.Control
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formPassword" className="mt-3">
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>
      <Button
        className="mt-4 w-100"
        variant="primary"
        type="submit"
        onClick={() => handleRegister(username, password, navigate)}
      >
        {REGISTER}
      </Button>
      <Button
        className="mt-3 w-100"
        variant="success"
        onClick={() => navigate("/login")}
      >
        {ALREADY_REGISTERED}
      </Button>
    </Form>
  );
};

export default RegisterForm;
