import React, { Component } from "react";
import axios from "axios";
import LoadingUsers from "./Loading/LoadingUsers";
import { Link } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";
class Users extends Component {
  state = {
    users: [],
    isLoading: true,
  };
  async componentDidMount() {
    const response = await axios.get("https://reqres.in/api/users/");

    this.setState({ users: response.data.data, isLoading: false });
  }
  render() {
    return (
      <>
        <button
          onClick={() => {
            this.handelcreate();
          }}
          className="btn btn-sm "
        >
          <AwesomeButton>Create User</AwesomeButton>
        </button>
        <div className="row">
          {this.state.isLoading ? (
            <LoadingUsers />
          ) : (
            this.state.users.map((user) => {
              return (
                <div className="col-4 text-center p-5">
                  <img
                    src={user.avatar}
                    style={{ borderRadius: "50%", width: "30%" }}
                    alt=""
                  />
                  <Link to={`/user/${user.id}`}>
                    <h4>
                      {user.first_name} {user.last_name}
                    </h4>
                  </Link>
                  <h5>{user.email}</h5>
                  <div className="row">
                    <div className="col-6">
                      <button
                        onClick={() => this.handelupdate(user)}
                        className="btn btn-info btn-sm"
                      >
                        Update
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        onClick={() => this.handeldelete(user)}
                        className="col-6 btn btn-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </>
    );
  }
  handelcreate = async () => {
    const newUser = {
      first_name: "Ali",
      last_name: "Hosseini",
      email: "ali.hosseini41@gmail.com",
      avatar:
        "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
    };
    const response = await axios.post("https://reqres.in/api/users/", newUser);
    this.setState({ users: [...this.state.users, newUser] });
    console.log(response);
  };
  handelupdate = async (user) => {
    user.first_name = "Updated";
    const response = await axios.put(`https://reqres.in/api/users/${user.id}`);
    console.log(response);
    const Updated = [...this.state.users];
    const index = Updated.indexOf(user);
    Updated[index] = { ...user };
    this.setState({ users: Updated });
  };
  handeldelete = async (user) => {
    const response = await axios.delete(
      `https://reqres.in/api/users/${user.id}`
    );
    const newUser = this.state.users.filter((u) => u.id !== user.id);
    this.setState({ users: newUser });
  };
}

export default Users;
