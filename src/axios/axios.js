import axios from 'axios'
const baseURL = "https://eyerov-hiring-tasks-server-ujyffp74ba-el.a.run.app/api/"
const instance = axios.create({
    baseURL
  });
  export default instance;  