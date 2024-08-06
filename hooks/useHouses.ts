import useSWR from "swr";
import { getHouses } from "@/app/api/houses/page";

const useGetHouses = () => {
  const { data, error } = useSWR("houses", getHouses);

  return {
    houses: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetHouses;
