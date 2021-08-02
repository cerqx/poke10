import axios from 'axios';

var api = axios.create({
    timeout: 20000,
})


export default api