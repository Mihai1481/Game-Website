import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "37e5abc41728439989ead896364d0bd1",
  },
});