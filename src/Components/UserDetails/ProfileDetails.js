import React,{useContext} from 'react';
import fetchUserContext from '../Context/HttpContext';

const ProfileDetails = () => {
    const httpCtx = useContext(fetchUserContext).userDetails;
 
    return (
        <>
        <div className="card">
            <div className="card-header bg-secondary text-white">
                <h2>User Details</h2>
               <div className="container">
                <span className="badge badge-danger mx-2">followers {httpCtx.followers}</span>
                <span className="badge badge-primary mx-2">following {httpCtx.following}</span>
                <span className="badge badge-warning mx-2">Git {httpCtx.public_gists}</span>
                <span className="badge badge-primary mx-2">Repository {httpCtx.public_repos}</span>
             
               </div>
            </div>
            <div className="card-body">
            <ul className="list-group">
                <ul className="list-group-item">Name: {httpCtx.name}</ul>
                <ul className="list-group-item">Bio: {httpCtx.bio}</ul>
                <ul className="list-group-item">Email: {httpCtx.email}</ul>
                <ul className="list-group-item">Contact: <a href={httpCtx.blog}>{httpCtx.blog}</a> </ul>
                <ul className="list-group-item">Location: {httpCtx.location}</ul>
                <ul className="list-group-item">Members since: {httpCtx.updated_at}</ul>
                <ul className="list-group-item">Profile Url since: {httpCtx.url}</ul>
            </ul>
            </div>
        </div>
        </>
    );
};

export default ProfileDetails;