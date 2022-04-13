import axios, { Axios } from "axios";
import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";
import { Link } from "react-router-dom";
import * as yup from "yup";
class Login extends Component {
  state = {
    account: {
      email: "",
      password: "",
    },
    errors: [],
    sending: false,
  };

  schema = yup.object().shape({
    email: yup.string().email("Email Needed").required("Email Is Required"),
    password: yup.string().min(4, "Password Need At Least 4 Character "),
  });
  validate = async () => {
    try {
      const result = await this.schema.validate(this.state.account, {
        abortEarly: false,
      });
      return result;
    } catch (error) {
      console.log(error.errors);
      this.setState({ errors: error.errors });
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const result = await this.validate();
    console.log(result);
    if (result) {
      try {
        this.setState({ sending: true });
        const postResponse = await axios.post(
          "https://reqres.in/api/login",
          result
        );
        localStorage.setItem("token", postResponse.data.token);

        window.location("/dashboard");

        this.setState({ sending: false });
        console.log(postResponse);
      } catch (error) {
        this.setState({ sending: false });
        this.setState({ errors: ["Email Or Password Is Not Correct"] });
      }
    }
  };

  handleChange = (e) => {
    const input = e.currentTarget;

    const account = this.state.account;
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    return (
      <>
        {this.state.errors.length !== 0 && (
          <div className="alert alert-danger">
            <ul>
              {this.state.errors.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>
        )}
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">Email:</label>
            <input
              value={this.state.account.email}
              onChange={this.handleChange}
              placeholder="Enter email"
              name="email"
              id="email"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password:</label>
            <input
              value={this.state.account.password}
              onChange={this.handleChange}
              placeholder="Password"
              name="password"
              id="password"
              type="password"
              className="form-control"
            />
          </div>

          <button disabled={this.state.sending} className=" btn btn-sm">
            <AwesomeButton type="primary" size="medium">
              Login
            </AwesomeButton>
          </button>
        </form>
        <p>Havent Account? {text} </p>
      </>
    );
  }
}
const text = <Link to="/register">Register</Link>;

export default Login;
