import React, { useContext} from "react";
import fetchUserContext from "../Context/HttpContext";

const Profile = () => {
    const ctx = useContext(fetchUserContext);
    

  return (
    <div className="card text-center">
      <div className="card-header text-center bg-danger text-white">
        <h2>Profile</h2>
      </div>
      <div className="card-body ">
        <img
          src={ctx.userDetails.avatar_url}
          className="w-100 card-img rounded-circle"
          alt=""
        />
        <ul className="list-group mt-2">
          <li className="list-group-item">Name: {ctx.userDetails.name}</li>
          <li className="list-group-item">Bio: {ctx.userDetails.bio}</li>
          <li className="list-group-item">Location: {ctx.userDetails.location}</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
