import axios from "axios";

export const authenticateApt = axios.create({
  baseURL: "http://localhost:8011/api/authenticate"
})