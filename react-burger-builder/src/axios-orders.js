import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-application-accdb.firebaseio.com/'
});

export default instance;