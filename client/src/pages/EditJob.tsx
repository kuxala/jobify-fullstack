import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useLoaderData, useParams } from "react-router-dom";
import { JOB_STATUS, JOB_TYPE } from "../../../utils/constants";
import { Form, useNavigation, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/costumFetch";
import FormRow from "../components/FormRow";
import FormRowSelect from "../components/FormRowSelect";
import axios from "axios";
import { useDashoboardContext } from "./DashboardLayout";
import SubmitBtn from "../components/SubmitBtn";

export const loader = async ({ params }: any) => {
  try {
    const { data } = await axios.get(`api/v1/jobs/${params.id}`);
    return data;
  } catch (error) {
    toast.error("error updating job");
    return redirect("/dashboard/all-jobs");
  }
};
export const action = async ({ request, params }: any) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.patch(`/jobs/${params.id}`, data);
    toast.success("Job edited successfully");
    return redirect("/dashboard/all-jobs");
  } catch (error) {
    toast.error("error while updating");
    return error;
  }
};

export default function EditJob() {
  const job: any = useLoaderData();

  // console.log(editData);

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">edit job</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            labelText="Position"
            defaultValue={job?.position}
          />
          <FormRow
            type="text"
            name="company"
            labelText="Company"
            defaultValue={job?.company}
          />
          <FormRow
            type="text"
            labelText="job location"
            name="jobLocation"
            defaultValue={job?.jobLocation}
          />

          <FormRowSelect
            name="jobStatus"
            labelText="job status"
            defaultValue={job?.jobStatus}
            list={Object.values(JOB_STATUS)}
          />
          <FormRowSelect
            name="jobType"
            labelText="job type"
            defaultValue={job?.jobType}
            list={Object.values(JOB_TYPE)}
          />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
}
