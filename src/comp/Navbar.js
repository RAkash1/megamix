import React, { useEffect } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import { UserState } from "../UserContext";
import api from "../api"
export default function Navbar() {
  const { users, setUsers } = UserState();
  const style = { color: "white", textDecoration: "none" }

  const logout = () => {
    fetch(`${api}/logout`, {
      method: "post",
      credentials: "include",
    }).then((res)=>setUsers(null));
    
  };
  const username = users?.username;
  // console.log(username)
  return (
    <div className="Navbar">
      <span>
        <Link to="/">
          <img src={logo} style={{ height: "40px", width: "40px" }}></img>
        </Link>
      </span>
      {username ? (
        <div>
          <span className="navButton">
            <Link
              to="/createPost"
              style={style}
            >
              Write
            </Link>
          </span>
          <span className="navButton">
            <Link
              to="/profile"
              style={style}
            >
              {username}
            </Link>
          </span>
          <span
            className="navButton"
            onClick={logout}
            style={style}
          >
            Logout
          </span>
        </div>
      ) : (
        <span className="navButton">
          <Link to="/login" style={style}>
            Get Started
          </Link>
        </span>
      )}
    </div>
  );
}
