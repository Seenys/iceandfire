import useSWR from "swr";
import { getHousesById } from "@/app/api/houses/page";

const useGetHouse = (houseId: string) => {
  const { data, error } = useSWR(`${houseId}`, getHousesById);

  return {
    house: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetHouse;
