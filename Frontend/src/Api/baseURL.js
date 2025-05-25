import axios from "axios";

const baseURL = axios.create({
    baseURL: 'http://localhost:4546' 
  });
  
  export default baseURL;