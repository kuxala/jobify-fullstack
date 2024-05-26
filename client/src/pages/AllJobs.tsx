import { toast } from "react-toastify";

import customFetch from "../utils/costumFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";
import SearchContainer from "../components/SearchContainer";
import JobsContainer from "../components/JobContainer";

export const loader = async ({ request }: any) => {
  try {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    const { data } = await customFetch.get("/jobs", { params });
    return { data, searchValues: params };
  } catch (error) {
    toast.error("error");
    return error;
  }
};

const AllJobsContext = createContext<null | { data: any }>(null);

export default function AllJobs() {
  const { data, searchValues }: any = useLoaderData();
  return (
    <>
      <AllJobsContext.Provider value={{ data, searchValues }}>
        <SearchContainer />
        <JobsContainer />
      </AllJobsContext.Provider>
    </>
  );
}

export const useAllJobsContext = () => useContext(AllJobsContext);
