import axios from "axios";

export const lessonApi = axios.create({
  baseURL: "http://localhost:8011/api"
})