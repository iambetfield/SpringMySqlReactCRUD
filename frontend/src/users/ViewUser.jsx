import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewUser = () => {

const[user,setUser] = useState({
    name: "",
    username:"",
    email:""
});

const {id}= useParams();

useEffect(()=>{
loadUser();
},[]);

const loadUser = async ()=> {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
}

  return (
    <div className="container">
      <h2 className="text-center m-4">Vista de Usuario</h2>
      <div className="card">
        <div className="card-header">
            Detalles del Usuario: {user.id}
            <ul className="list-group list-froup flush mt-4">
                <li className="list-group-item">
                    <b>Name: </b>
                    {user.name}
                </li>
                <li className="list-group-item">
                    <b>UserName: </b>
                    {user.username}
                </li>
                <li className="list-group-item">
                    <b>Email: </b>
                    {user.email}
                </li>

            </ul>

        </div>

      </div>
        <Link  className="btn btn-primary my-2" to="/"> Back Home</Link>
      
    </div>
  );
};

export default ViewUser;
