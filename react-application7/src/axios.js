import axios from "axios";

const instace = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

instace.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";

export default instace;
