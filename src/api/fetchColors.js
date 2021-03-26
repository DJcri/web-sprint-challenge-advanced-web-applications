import axios from "axios";

export const fetchColors = () => {
  return axios
    .get("https://localhost:5000/api/colors")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.error("error fetching data from api, err: ", err.message);
      return err;
    });
};
