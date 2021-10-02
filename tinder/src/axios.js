import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-backend-nice.herokuapp.com/',
});

export default instance; 