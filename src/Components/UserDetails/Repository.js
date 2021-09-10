import React, { useContext } from "react";
import fetchUserContext from "../Context/HttpContext";

const Repository = () => {
  const reposCtx = useContext(fetchUserContext).userRepos;
  console.log(reposCtx);
  return (
    <>
      <div className="card">
        <div className="card-header bg-success text-white">
          <h2>Our Repository</h2>
        </div>
        <div className="card-body">
          <ul className="list-group">
            {reposCtx.map((u) => {return(
                <li className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                  <a href={u.html_url} >{u.html_url}</a>
                  <span className="badge badge-success">{u.starred_url}</span>
                  <span className="badge badge-info">{u.watchers}</span>
                  <span className="badge badge-warning">{u.forks}</span>
                </div>
                </li>

            )})}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Repository;
