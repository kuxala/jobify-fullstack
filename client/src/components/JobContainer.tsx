import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useAllJobsContext } from "../pages/AllJobs";
import PageBtnContainer from "./pageBtnContainer";

export default function JobContainer() {
  const { data }: any = useAllJobsContext();
  const { jobs, totalJobs, numOfPages }: any = data;

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display..</h2>
      </Wrapper>
    );
  }
  return (
    <>
      <Wrapper>
        <h5>
          {totalJobs} job{jobs.length > 1 && "s"} found
        </h5>
        <div className="jobs">
          {jobs.map((job: any) => {
            return <Job key={job._id} {...job} />;
          })}
        </div>
        {numOfPages > 1 && <PageBtnContainer />}
      </Wrapper>
    </>
  );
}
