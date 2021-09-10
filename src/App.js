import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/mdbootstrap/css/mdb.css";
import Navbar from "./Components/NavBar/Navbar";
import { HttpContextProvider } from "./Components/Context/HttpContext";
import Repository from "./Components/UserDetails/Repository";
import ProfileDetails from "./Components/UserDetails/ProfileDetails";
import Profile from "./Components/UserDetails/Profile";
import fetchUserContext from "./Components/Context/HttpContext";

function App() {
  const ctx = useContext(fetchUserContext);
  console.log(Object.keys(ctx.userDetails).length);
  return (
    <HttpContextProvider>
      <Navbar />

      {Object.keys(ctx.userDetails).length === 0 && (
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-3">
              <Profile />
            </div>
            <div className="col-md-9">
              <ProfileDetails />
            </div>
          </div>
        </div>
      )}
      <div className="container mt-3">
        <section className="row ">
          <div className="col">
            <Repository />
          </div>
        </section>
      </div>
    </HttpContextProvider>
  );
}

export default App;
