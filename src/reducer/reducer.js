import axios from "axios";
const initialState = {
  login: "",
  register: "",
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "LOGIN":
      axios
        .post("http://localhost:8080/login", {
          uname: action.value.uname,
          upwd: action.value.upwd,
        })
        .then(
          (posRes) => {
            newState.login = posRes.data;
          },
          (errRes) => {
            console.log(errRes);
          }
        );
      break;
    case "REGISTER":
      axios
        .post("http://localhost:8080/register", {
          uname: action.value.uname,
          upwd: action.value.upwd,
        })
        .then(
          (posRes) => {
            newState.register = posRes.data;
          },
          (errRes) => {
            console.log(errRes);
          }
        );
      break;
  }
  return newState;
};

export default reducer;
