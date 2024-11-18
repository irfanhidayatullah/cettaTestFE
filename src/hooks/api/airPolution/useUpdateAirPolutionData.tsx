"use client";

import useAxios from "@/hooks/useAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface UpdateAirPolutionDataPayload {
  id: number;
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

const useUpdateAirPolutionData = (id: number) => {
  const router = useRouter();
  const { axiosInstance } = useAxios();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: UpdateAirPolutionDataPayload) => {
      const { data } = await axiosInstance.patch(
        `/air-polution/${id}`,
        payload
      );
      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["airPolutions"] });
      toast.success("Update air polution data success");
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data);
    },
  });
};

export default useUpdateAirPolutionData;
