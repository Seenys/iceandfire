import useSWR from "swr";
import { getDataFromUri } from "@/app/api/houses/getDataFromUri";

const fetcher = (url: string) => getDataFromUri(url);

const useSwornMembers = (swornMembers: string[]) => {
  const { data, error } = useSWR(
    swornMembers?.length > 0 ? swornMembers : null,
    async (urls: string[]) => {
      const results = await Promise.allSettled(urls.map(fetcher));
      return results
        .filter((result) => result.status === "fulfilled")
        .map((result) => (result as PromiseFulfilledResult<any>).value);
    },
  );

  return {
    swornMembers: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useSwornMembers;
