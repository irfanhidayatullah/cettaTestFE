"use client";

import { axiosInstance } from "@/lib/axios";
import { getSession, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

const useAxios = () => {
  useEffect(() => {
    const requestIntercept = axiosInstance.interceptors.request.use(
      async (config) => {
        const session = await getSession();
        const token = session?.user.token;
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const responseIntercept = axiosInstance.interceptors.response.use(
      (response) => response,
      (err) => {
        if (err?.response.status === 403) {
          signOut();
        }

        return Promise.reject(err);
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestIntercept);
      axiosInstance.interceptors.response.eject(responseIntercept);
    };
  }, []);

  return { axiosInstance };
};

export default useAxios;