import React, { createContext, useState,useEffect } from "react";
import { Credential } from "../Credential/Credential";
import axios from "axios";
const { clientId, secretKey } = Credential;

const fetchUserContext = createContext({
  userDetails: {},
  userRepos: [],
  onChangeHandler: (e) => {},
  onSubmitHandler: (e) => {},
});

export const HttpContextProvider = (props) => {
  const [userDetails, setUserDetails] = useState({});
  const [userRepos, setUserRepos] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    httpFetchUser(clientId, secretKey, "mdmubasheer6544");
    httpFetchUserRepo(clientId, secretKey, "mdmubasheer6544");
  }, [])

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const httpFetchUser = async (clientId, secretKey, searchValue) => {
    let url = `https://api.github.com/users/${searchValue}?Client_ID=${clientId},&Client_Secret=${secretKey}`;
    axios
      .get(url)
      .then((user) => {
        setUserDetails(user.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const httpFetchUserRepo = (clientId, secretKey, searchValue) => {
    let url = `https://api.github.com/users/${searchValue}/repos?Client_ID=${clientId},&Client_Secret=${secretKey}`;

    axios
      .get(url)
      .then((user) => {
        setUserRepos(user.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmitHandler = (e) => {
    httpFetchUser(clientId, secretKey, value);
    httpFetchUserRepo(clientId, secretKey, value);
    setValue("")
  };

  const initialValue = {
    value,
    userDetails,
    userRepos,
    onChangeHandler,
    onSubmitHandler,
  };

  return (
    <fetchUserContext.Provider value={initialValue}>
      {props.children}
    </fetchUserContext.Provider>
  );
};

export default fetchUserContext;
