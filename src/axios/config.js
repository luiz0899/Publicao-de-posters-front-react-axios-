import axios from "axios";

const blogFetch = axios.create({
    baseURL:"http://localhost:8082/postcontroller",
    headers: {
        "Content-Type" : "application/json",
    },
});

export default blogFetch;