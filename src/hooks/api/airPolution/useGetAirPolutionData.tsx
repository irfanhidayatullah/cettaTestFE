"use client";

import useAxios from "@/hooks/useAxios";
import { AirPolutionData } from "@/types/airPolutionData";
import { useQuery } from "@tanstack/react-query";

const useGetAirPolution = (id: number) => {
  const { axiosInstance } = useAxios();

  return useQuery({
    queryKey: ["airPolutions", id],
    queryFn: async () => {
      const { data } = await axiosInstance.get<AirPolutionData>(
        `/air-polution/${id}`
      );
      return data;
    },
  });
};

export default useGetAirPolution;
