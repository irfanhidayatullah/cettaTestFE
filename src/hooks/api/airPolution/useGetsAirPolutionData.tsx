import useAxios from "@/hooks/useAxios";
import { AirPolutionData } from "@/types/airPolutionData";
import { PageableResponse, PaginationQueries } from "@/types/pagination";
import { useQuery } from "@tanstack/react-query";

interface GetAirPolutionListQueries extends PaginationQueries {
  search?: string;
}

const useGetAirPolutions = (queries: GetAirPolutionListQueries) => {
  const { axiosInstance } = useAxios();

  return useQuery({
    queryKey: ["airPolutions", queries],
    queryFn: async () => {
      const { data } = await axiosInstance.get<
        PageableResponse<AirPolutionData>
      >("/air-polution", { params: queries });
      return data;
    },
  });
};

export default useGetAirPolutions;
