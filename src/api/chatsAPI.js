import axios from "axios";

const baseUrl = 'https://imnagvsoy3.execute-api.eu-west-1.amazonaws.com/prod'

// const baseUrl = 'https://jsonplaceholder.typicode.com'
export default axios.create({
    baseURL: baseUrl
})
