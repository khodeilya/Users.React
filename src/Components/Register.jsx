import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";
import { Link } from "react-router-dom";
class Register extends Component {
  render() {
    return (
      <>
        <form>
          <div className="mb-3">
            <label htmlFor="email">Email:</label>
            <input
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
              placeholder="Youre Password"
              name="password"
              id="password"
              type="password"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password:</label>
            <input
              placeholder=" Reapate Youre Password"
              name="password"
              id="password"
              type="password"
              className="form-control"
            />
          </div>

          <button className=" btn btn-sm">
            <AwesomeButton size="medium">Register</AwesomeButton>
          </button>
        </form>
        <p>Havent Account? {text} </p>
      </>
    );
  }
}
const text = <Link to="/login">Login</Link>;

export default Register;
