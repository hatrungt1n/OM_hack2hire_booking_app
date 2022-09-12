import { axiosInstance } from "../utils/axios";

// API demo
export function getShowsAPI() {
  return axiosInstance.get("/shows");
}

export function getSeatsAPI(i) {
  return axiosInstance.get(`/shows/${i}/seats`);
}
