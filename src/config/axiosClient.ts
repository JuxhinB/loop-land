import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const options = {
  baseURL: ` https://challenge-api.view.agentur-loop.com`,
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
const client = axios.create(options);

const onResponseSuccess = (response: AxiosResponse) => {
  return {
    isSuccess: true,
    ...response,
  };
};

const onResponseFail = (error: AxiosError) => {
  if (error && error.response && error.response.status === 401) {
    return Promise.reject({ isSuccess: false, logout: "true", ...error });
  }
  return Promise.reject({ isSuccess: false, ...error });
};

const onRequestSuccess = (config: AxiosRequestConfig) => {
  return config;
};

const onRequestFail = (error: any) => {
  return error;
};

client.interceptors.response.use(onResponseSuccess, onResponseFail);
client.interceptors.request.use(onRequestSuccess, onRequestFail);

export default client;
