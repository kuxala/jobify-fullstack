import { useLoaderData } from "react-router-dom";
import customFetch from "../utils/costumFetch";
import StatsContainer from "../components/StatsContainer";
import ChartsContainer from "../components/ChartsContainer";

export const loader = async () => {
  try {
    const response = await customFetch.get("/jobs/stats");
    return response.data;
  } catch (error) {
    return error;
  }
};
export default function Stats() {
  const { defaultStats, monthlyApplications }: any = useLoaderData();

  return (
    <>
      {" "}
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications?.length > 1 && (
        <ChartsContainer data={monthlyApplications} />
      )}
    </>
  );
}
