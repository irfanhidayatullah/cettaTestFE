"use client";

import useAxios from "@/hooks/useAxios";
import { AirPolutionData } from "@/types/airPolutionData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface CreateAirPolutionPayload {
  country: string;
  city: string;
  aqiValue: number;
  aqiCategory: string;
  coAqiValue: number;
  coAqiCategory: string;
  ozoneAqiValue: number;
  ozoneAqiCategory: string;
  no2AqiValue: number;
  no2AqiCategory: string;
  pm25AqiValue: number;
  pm25AqiCategory: string;
}

const useCreateAirPolution = () => {
  const router = useRouter();
  const { axiosInstance } = useAxios();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: CreateAirPolutionPayload) => {
      const { data } = await axiosInstance.post(`/air-polution/`, payload);
      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["airPolutions"] });
      toast.success("Create Air Polution data success");
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data);
    },
  });
};

export default useCreateAirPolution;
