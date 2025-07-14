import axios from "axios";

export const dashboardApt = axios.create({
  baseURL: "http://localhost:8011/api"
})