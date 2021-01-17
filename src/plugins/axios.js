import axios from "axios";

export default axios.create({
  // baseURL: "http://bot.kagerou.top",
  headers: {
    "Content-type": "application/json",
  },
});
