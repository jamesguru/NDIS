import axios from "axios";
const BASE_URL="http://localhost:8800/api/v1/";
const BASE_URL_1="http://localhost:8000/api/v1/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGI2NzM2ZjJmZDM2YTBlMjA5YWE3MSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDQ5MTQ1MDUsImV4cCI6MTY0NTE3MzcwNX0.TRfdqYrZXhFrj7kYmpv1jnQtYMxMPu-unP-g9cYux4Q";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const backgroundservicesreq = axios.create({
  baseURL: BASE_URL_1,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  secondURL: BASE_URL_1,
  headers: { token: `Bearer ${TOKEN}` },
});