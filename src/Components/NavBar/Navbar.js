import React, { useContext } from "react";
import fetchUserContext from "../Context/HttpContext";


const Navbar = () => {
  const httpCtx = useContext(fetchUserContext);

  const onSubmitHandler = (e) => {
      e.preventDefault();
      httpCtx.onSubmitHandler();
  
  };

  const onChangeHandler = (e) => {
    httpCtx.onChangeHandler(e)
  };

  return (
    <nav className="navbar px-4 navbar-dark bg-info navbar-expand-sm">
      <a href="" className="navbar-brand">
        GitHub Search
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSearch"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-collapse collapse" id="navbarSearch">
        <form
          className="form-inline search-form  align-items-center row "
          onSubmit={onSubmitHandler}
        >
          <div className="col-md-6">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={httpCtx.value}
              onChange={onChangeHandler}
            />
          </div>
          <div className="col-md-6">
            <button
              className="btn btn-outline-warning mt-3
               btn-sm my-sm-0"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
