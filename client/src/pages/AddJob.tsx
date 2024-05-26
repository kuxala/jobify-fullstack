import FormRow from "../components/FormRow";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useOutletContext } from "react-router-dom";
import { JOB_STATUS, JOB_TYPE } from "../../../utils/constants.js";
import { Form, useNavigation, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/costumFetch";
import FormRowSelect from "../components/FormRowSelect";
import SubmitBtn from "../components/SubmitBtn.js";

export const action = async ({ request }: any) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/jobs", data);
    toast.success("Job added successful");
    return redirect("/dashboard/all-jobs");
  } catch (error) {
    toast.error("Cannot add Jobs");
    return error;
  }
};

export default function AddJob() {
  const data = useOutletContext();

  return (
    <>
      <Wrapper>
        <Form method="post" className="form">
          <h4 className="form-title">add job</h4>
          <div className="form-center">
            <FormRow type="text" name="position" labelText="Position" />
            <FormRow type="text" name="company" labelText="Company" />
            <FormRow type="text" labelText="job location" name="jobLocation" />
            <FormRowSelect
              labelText="job status"
              name="jobStatus"
              defaultValue={JOB_STATUS.PENDING}
              list={Object.values(JOB_STATUS)}
            />
            <FormRowSelect
              labelText="job type"
              name="jobType"
              defaultValue={JOB_TYPE.FULL_TIME}
              list={Object.values(JOB_TYPE)}
            />
            <SubmitBtn formBtn />
          </div>
        </Form>
      </Wrapper>
    </>
  );
}
