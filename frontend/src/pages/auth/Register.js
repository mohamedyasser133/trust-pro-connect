import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Form, Row } from "react-bootstrap";
import { baseUrl } from "../../api/baseUrl";
import { notify } from "../../utils/useNotification";

const validation = (name, email, password, passwordConfirm, setErrors) => {
  const newErrors = new Map();
  if (!name) {
    newErrors.set("name", "Name is required");
  }
  if (!email) {
    newErrors.set("email", "Email is required");
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    newErrors.set("email", "Enter a valid email");
  }
  if (!password) {
    newErrors.set("password", "Password is required");
  }
  if (password.length < 4) {
    newErrors.set("password", "Too short password");
  }
  if (!passwordConfirm) {
    newErrors.set("passwordConfirm", "Password Confirmation is required");
  }
  if (password && passwordConfirm && password !== passwordConfirm) {
    newErrors.set(
      "passwordConfirm",
      "Password Confirmation must be like password"
    );
  }

  if (newErrors.size) {
    setErrors(newErrors);
    return false;
  }
  return true;
};

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState(new Map());
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault()

    if (!validation(name, email, password, passwordConfirm, setErrors)) {
      return false;
    }
    const data = {
      name: name.trim(),
      email: email.trim(),
      password,
      passwordConfirm,
    };
    try {
      const registerResponse = await baseUrl.post("/register", data);
      if (registerResponse.status === 201) {
        const loginResponse = await baseUrl.post("/login", {
          email: email.trim(),
          password,
        });
        if (loginResponse.status === 200) {
          localStorage.setItem("user", JSON.stringify(loginResponse.data.data));
          localStorage.setItem("token", `Bearer ${loginResponse.data.token}`);
          notify("Sign up successfully", "success");
          navigate("/");
        }
      }
    } catch (err) {
      if (
        err?.response?.data?.errors &&
        err?.response?.data?.errors[0]?.msg?.startsWith(
          "this email already used"
        )
      ) {
        notify("This email already used", "error");
        setErrors((errors) =>
          new Map(errors).set("email", "This email already used")
        );
      } else {
        notify("Something went wrong", "error");
      }
    }
  };

  return (
    <Container className={"mt-5 border p-3 rounded "}>
      <Row>
        <h1>Sign up</h1>
        <p>To get started</p>
      </Row>
      <Row>
        <Form>
          <Form.Group controlId="formName" className={"mb-2"}>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => {
                // remove error first if exist
                errors.has("name") && errors.delete("name");
                setName(e.target.value);
              }}
              isInvalid={errors.has("name")}
            />
            <Form.Control.Feedback type="invalid">
              {errors.has("name") && errors.get("name")}
            </Form.Control.Feedback>
          </Form.Group>

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

          <Form.Group controlId="formPasswordConfirm" className={"mb-3"}>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={passwordConfirm}
              onChange={(e) => {
                errors.has("passwordConfirm") &&
                  errors.delete("passwordConfirm");
                setPasswordConfirm(e.target.value);
              }}
              isInvalid={errors.has("passwordConfirm")}
            />
            <Form.Control.Feedback type="invalid">
              {errors.has("passwordConfirm") && errors.get("passwordConfirm")}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox" className="mb-2">
            <Form.Check
              style={{ userSelect: "none" }}
              type="checkbox"
              label="Agree to terms and conditions"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
          </Form.Group>

          <Button
            className="w-100"
            variant="primary"
            onClick={handleRegister}
            type="submit"
            disabled={!agree}
          >
            Continue
          </Button>
          <div className="mt-2 text-center">
            <span className="text-black-50"> Already registered? </span>
            <Link to={"/login"}> Login </Link>
          </div>
        </Form>
      </Row>
    </Container>
  );
}

export default Register;
