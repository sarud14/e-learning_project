import axios from "axios";

export const courseApi = axios.create({
  baseURL: "http://localhost:8011/api/courses"
})