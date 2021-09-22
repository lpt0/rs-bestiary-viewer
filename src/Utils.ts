import axios from "axios";

export const API = axios.create(
  Object.freeze({
    baseURL: process.env["REACT_APP_API_URL"] || "http://localhost:8080"
  })
);