import { redirect } from "react-router-dom";
import customFetch from "../utils/costumFetch";
import { toast } from "react-toastify";

export async function action({ params }: any) {
  try {
    await customFetch.delete(`/jobs/${params.id}`);
    toast.success("Job deleted successfully");
  } catch (error) {
    toast.error("error while deleting");
  }
  return redirect("/dashboard/all-jobs");
}

export default function DeleteJob() {
  return <></>;
}
