import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: { 
        key: 'd05d2173a23648c68b6a4322c0955058'
    }
})