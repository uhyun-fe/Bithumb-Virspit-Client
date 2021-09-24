import axios from "axios";
import cookie from "react-cookies";

// Cookie_Text
import cookie_text from "../assets/contents/cookie_text";

const URL_END_POINT = "http://localhost:8000/";

const api = axios.create({
   baseURL: URL_END_POINT,
   headers: {
      accept: "application/json",
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      "X-Http-Token": cookie.load(cookie_text.user_token),
   },
});

export const memberApi = {
   login: (form) => api.post("login", form),
};
