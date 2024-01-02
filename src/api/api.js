import axios from "axios";

const Login = (email, password) => {
  return axios.post(
    "https://2a85-2001-ee0-4e3c-c260-d4b4-693-4ffa-19fa.ngrok-free.app/documentation#/AUTH/AuthController_login",
    { email, password }
  );
};

export { Login };
