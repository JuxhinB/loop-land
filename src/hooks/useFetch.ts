import { useState, useEffect } from "react";
import { AxiosResponse } from "axios";
//
import axios from "../config/axiosClient";

interface ResultTypes<T> {
  status: "success" | "error";
  isSuccess: boolean;
  action: any;
  message?: any;
  error?: any;
  data?: T;
  config?: any;
}

interface Params<T> {
  data?: T;
  urlEncoded?: any;
  headers?: any;
}

interface ErrorType {
  message: string;
}

function useFetch<RequestParams, Response>(stdUrl: string) {
  const [result, setResult] = useState<ResultTypes<Response> | null>(null);
  const [loading, setLoading] = useState(false);
  const [promise, setPromise] = useState<
    Promise<AxiosResponse<Response>> | undefined
  >();
  const [data, setData] = useState<Response | null>(null);
  const [error, setError] = useState<AxiosResponse<ErrorType> | null>(null);

  const accessTokenJWT = "";

  // promise resolved
  useEffect(() => {
    if (!promise) return;

    (async () => {
      try {
        const result = await promise;
        setLoading(false);
        if (result.status - 400 < 0) {
          setData(result.data);
          setResult({
            status: "success",
            isSuccess: true,
            action: result && result.config && result.config.method,
            data: result && result.data,
          });
        }
      } catch (e: any) {
        setLoading(false);
        setResult({
          status: "error",
          isSuccess: false,
          action: result && result.config && result.config.method,
          message: { ...e },
          error: { ...e.response },
        });
        setError({ ...e.response });
        return;
      }
    })();
  }, [promise, result]);

  function getData({ data, urlEncoded, headers }: Params<RequestParams>): any {
    if (loading) return;
    try {
      setLoading(true);
      const promise = axios.get(
        `${stdUrl}${urlEncoded ? encodeUrl(data) : ""}`,
        {
          headers: {
            "Content-Type": "application/json",
            ...headers,
            ...(accessTokenJWT
              ? { Authorization: "Bearer " + accessTokenJWT }
              : {}),
          },
        }
      );
      setPromise(promise);
      return promise;
    } catch (error) {
      return;
    }
  }

  // Post Data
  function postData({ data, urlEncoded, headers }: Params<RequestParams>): any {
    if (loading) return;

    let jointHeaders = {
      "Content-Type": "application/json",
      ...headers,
    };
    try {
      setLoading(true);
      setResult(null);
      const promise = axios.post(
        `${stdUrl}${urlEncoded ? encodeUrl(data) : ""}`,
        urlEncoded ? {} : data,
        {
          headers: {
            ...jointHeaders,
            ...(accessTokenJWT
              ? { Authorization: "Bearer " + accessTokenJWT }
              : {}),
          },
        }
      );
      setPromise(promise);
      return promise;
    } catch (error) {
      return;
    }
  }

  // Put Data
  function putData({ data, urlEncoded, headers }: Params<RequestParams>): any {
    if (loading) return;
    try {
      setLoading(true);
      setResult(null);

      const promise = axios.put(
        `${stdUrl}${urlEncoded ? encodeUrl(data) : ""}`,
        urlEncoded ? {} : data,
        {
          headers: {
            "Content-Type": "application/json",
            ...headers,
            ...(accessTokenJWT
              ? { Authorization: "Bearer " + accessTokenJWT }
              : {}),
          },
        }
      );

      setPromise(promise);
      return promise;
    } catch (error) {}
  }

  // Post Data
  function patchData({
    data,
    urlEncoded,
    headers,
  }: Params<RequestParams>): any {
    if (loading) return;
    try {
      setLoading(true);
      setResult(null);
      const promise = axios.patch(
        `${stdUrl}${urlEncoded ? encodeUrl(data) : ""}`,
        urlEncoded ? {} : data,
        {
          headers: {
            "Content-Type": "application/json",
            ...(accessTokenJWT
              ? { Authorization: "Bearer " + accessTokenJWT }
              : {}),
          },
        }
      );
      setPromise(promise);
      return promise;
    } catch (error) {}
  }

  // Delete Data
  function deleteData({
    data,
    urlEncoded,
    headers,
  }: Params<RequestParams>): any {
    if (loading) return;

    try {
      setLoading(true);
      setResult(null);

      const promise = axios.delete(
        `${stdUrl}${urlEncoded ? encodeUrl(data) : ""}`,
        {
          headers: {
            ...(accessTokenJWT
              ? { Authorization: "Bearer " + accessTokenJWT }
              : {}),
          },
        }
      );
      setPromise(promise);
      return promise;
    } catch (error) {
      return;
    }
  }

  const reset = () => {
    setData(null);
  };

  return {
    result,
    loading,
    data,
    deleteData,
    getData,
    postData,
    putData,
    patchData,
    reset,
    error,
    resetError: () => setError(null),
  };
}

const encodeUrl = (obj: any) => {
  return `?${encodeURI(
    Object.entries(obj)
      .map(([key, val]) => {
        const customVal = typeof val === "object" ? JSON.stringify(val) : val;
        return "" + key + "=" + customVal;
      })
      .join("&")
  )}`;
};

export default useFetch;
