import axios from "axios";

export const api = axios.create({
  baseURL: "http://api-events.eba-d6wimgnv.us-east-1.elasticbeanstalk.com/api",
});
