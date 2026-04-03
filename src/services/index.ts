import axios from "axios";

const baseUrl =
  import.meta.env.VITE_BACKEND ||
  "https://rpwpe3dd5e.ap-southeast-1.awsapprunner.com";

const client = axios.create({
  baseURL: baseUrl,
});

export default client;
