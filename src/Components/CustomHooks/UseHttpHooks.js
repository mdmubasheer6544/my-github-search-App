import React,{useState} from 'react';
import { Credential } from "../Credential/Credential";
import axios from "axios";
const { clientId, secretKey } = Credential;

const UseHttpHooks = () => {



    const httpFetchUser = (clientId, secretKey, searchValue) => {
        let url = `https://api.github.com/users/${searchValue}?Client_ID=${clientId},&Client_Secret=${secretKey}`;
    
        axios
          .get(url)
          .then((user) => console.log(user.data))
          .catch((err) => console.log(err));
      };




    return{
        
    }
};

export default UseHttpHooks;