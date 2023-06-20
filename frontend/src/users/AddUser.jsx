import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddUser = () => {

let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:8080/user", user)
    navigate("/")
  };

  return (
    <div className="container">
      <h2 className="text-center m-4">Registro de Usuario</h2>
      <form onSubmit={(e)=>onSubmit(e)}>
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <label for="exampleInputPassword1" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
          />
          <br />
          <label for="exampleInputPassword1" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={username}
            onChange={(e) => onInputChange(e)}
          />
          <br />
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            required
            className="form-control"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
          />
          <br />
        </div>

        <div className="mt-4">
          <button type="submit" className="btn btn-outline-primary mx-2">
            Submit
          </button>
          <Link className="btn btn-outline-danger mx-2" to="/">
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
