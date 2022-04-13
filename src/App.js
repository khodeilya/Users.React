import { Component } from "react";
import Navbar from "./Components/NavBar";
import Users from "./Components/users";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { Route, BrowserRouter, Routes, Outlet } from "react-router-dom";
import User from "./Components/User";
import NotFound from "./Components/NotFound";
import Dashboard from "./Components/dashboard";
class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="users" element={<Users />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
