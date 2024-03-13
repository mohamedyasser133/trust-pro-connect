import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Form, Row } from "react-bootstrap";
import { baseUrl } from "../../api/baseUrl";
import { notify } from "../../utils/useNotification";

const validation = (email, password, setErrors) => {
  const newErrors = new Map();
  if (!email) {
    newErrors.set("email", "Email is required");
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    newErrors.set("email", "Enter a valid email");
  }
  if (!password) {
    newErrors.set("password", "Password is required");
  }

  if (newErrors.size) {
    setErrors(newErrors);
    return false;
  }
  return true;
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(new Map());
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validation(email, password, setErrors)) {
      return false;
    }
    const data = {
      email: email.trim(),
      password,
    };
    try {
      const loginResponse = await baseUrl.post("/login", data);
      if (loginResponse.status === 200) {
        localStorage.setItem("user", JSON.stringify(loginResponse.data.data));
        localStorage.setItem("token", `Bearer ${loginResponse.data.token}`);
        notify("Login successfully", "success");
        navigate("/");
      }
    } catch (err) {
      if (
        err?.response?.data?.errors &&
        err?.response?.data?.errors[0]?.msg?.startsWith(
          "email or password is incorrect"
        )
      ) {
        notify("email or password is incorrect", "error");
      } else {
        notify("Something went wrong", "error");
      }
    }
  };

  return (
    <Container className={"mt-5 border p-3 rounded "}>
      <Row>
        <h1>Login</h1>
      </Row>
      <Row>
        <Form>
          <Form.Group controlId="formEmail" className={"mb-2"}>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                errors.has("email") && errors.delete("email");
                setEmail(e.target.value);
              }}
              isInvalid={errors.has("email")}
            />
            <Form.Control.Feedback type="invalid">
              {errors.has("email") && errors.get("email")}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formPassword" className={"mb-2"}>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                errors.has("password") && errors.delete("password");
                setPassword(e.target.value);
              }}
              isInvalid={errors.has("password")}
            />
            <Form.Control.Feedback type="invalid">
              {errors.has("password") && errors.get("password")}
            </Form.Control.Feedback>
          </Form.Group>

          <Button
            className="w-100"
            variant="primary"
            onClick={handleLogin}
            type="submit"
          >
            Continue
          </Button>
          <div className="mt-2 text-center">
            <span className="text-black-50"> Don't Have Account? </span>
            <Link to={"/register"}> Register </Link>
          </div>
        </Form>
      </Row>
    </Container>
  );
}

export default Login;
