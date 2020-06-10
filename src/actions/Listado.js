
import axios from "axios";


export const getListado = () => {
  return (dispatch) => {
    return axios.get(
      "https://swapi.dev/api/people"
    );
  };
};


