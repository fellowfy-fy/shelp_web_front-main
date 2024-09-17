import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:1235",
  headers: {
    "Content-Type": "application/json",
  },
});
