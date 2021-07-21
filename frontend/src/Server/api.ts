import axios from 'axios';

export default axios.create({
    baseURL: "https://hackathon-backend01.herokuapp.com/",
    responseType: "json"
})