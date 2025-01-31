import { Col, Container, Row } from "reactstrap";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { Facebook, Linkedin, Twitter } from "react-feather";
import { Button, FormGroup, Input, Label } from "reactstrap";
import {
  CreateAccount,
  DoNotAccount,
  EmailAddress,
  EnterEmailPasswordLogin,
  FacebookHeading,
  ForgotPassword,
  Password,
  RememberPassword,
  SignIn,
  SignInAccount,
  SignInWith,
  TwitterHeading,
  linkedInHeading,
} from "utils/Constant";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import CommonLogo from "./CommonLogo";

const Login = () => {
  const [showPassWord, setShowPassWord] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "Test@gmail.com",
    password: "Test@123",
  });
  const { email, password } = formValues;
  const router = useRouter();
  const handleUserValue = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };
  const formSubmitHandle = (event: FormEvent) => {
    event.preventDefault();
    if (email === "Test@gmail.com" && password === "Test@123") {
      Cookies.set("token", JSON.stringify(true));
      router.push("/sample-page");
      toast.success("login successful");
    } else {
      toast.error("wrong");
    }
  };

  return (
    <Container fluid className="p-0">
      <Row className="m-0">
        <Col xs={12} className="p-0">
          <div className="login-card login-dark">
            <div>
              <div>
                <CommonLogo />
              </div>
              <div className="login-main">
                <form className="theme-form" onSubmit={formSubmitHandle}>
                  <h4>{SignInAccount}</h4>
                  <p>{EnterEmailPasswordLogin}</p>
                  <FormGroup>
                    <Label className="col-form-label">{EmailAddress}</Label>
                    <Input
                      type="email"
                      required
                      placeholder="Test@gmail.com"
                      value={email}
                      name="email"
                      onChange={handleUserValue}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label">{Password}</Label>
                    <div className="form-input position-relative">
                      <Input
                        type={showPassWord ? "text" : "password"}
                        placeholder="*********"
                        onChange={handleUserValue}
                        value={password}
                        name="password"
                      />
                      <div className="show-hide">
                        <span
                          onClick={() => setShowPassWord(!showPassWord)}
                          className={!showPassWord ? "show" : ""}
                        />
                      </div>
                    </div>
                  </FormGroup>
                  <FormGroup className="mb-0 form-group">
                    <div className="checkbox p-0">
                      <Input id="checkbox1" type="checkbox" />
                      <Label className="text-muted" htmlFor="checkbox1">
                        {RememberPassword}
                      </Label>
                    </div>
                    <Link
                      className="link"
                      href="/pages/authentication/forget-pwd"
                    >
                      {ForgotPassword}
                    </Link>
                    <div className="text-end mt-3">
                      <Button
                        color="primary"
                        className="btn-block w-100"
                        type="submit"
                      >
                        {SignIn}
                      </Button>
                    </div>
                  </FormGroup>
                </form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
