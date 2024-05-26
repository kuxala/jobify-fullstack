import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useOutletContext } from "react-router-dom";
import { Form } from "react-router-dom";
import customFetch from "../utils/costumFetch";
import { toast } from "react-toastify";
import FormRow from "../components/FormRow";
import SubmitBtn from "../components/SubmitBtn";

export const action = async ({ request }: any) => {
  const formData = await request.formData();

  const file = formData.get("avatar");
  if (file && file.size > 500000) {
    toast.error("Image size too large");
    return null;
  }

  try {
    await customFetch.patch("/users/update-user", formData);
    toast.success("Profile updated successfully");
  } catch (error) {
    toast.error("error while updating profile");
  }
  return null;
};

export default function Profile() {
  const { user }: any = useOutletContext();
  const { name, lastName, email, location } = user;
  // console.log(name, lastName, email, location);

  return (
    <>
      <Wrapper>
        <Form method="post" className="form" encType="multipart/form-data">
          <h4 className="form-title">profile</h4>

          <div className="form-center">
            <div className="form-row">
              <label htmlFor="image" className="form-label">
                Select an image file (max 0.5 MB):
              </label>
              <input
                type="file"
                id="avatar"
                name="avatar"
                className="form-input"
                accept="image/*"
              />
            </div>
            <FormRow
              type="text"
              name="name"
              defaultValue={name}
              labelText="First Name"
            />
            <FormRow
              type="text"
              labelText="last name"
              name="lastName"
              defaultValue={lastName}
            />
            <FormRow
              type="email"
              name="email"
              defaultValue={email}
              labelText="Email"
            />
            <FormRow
              type="text"
              name="location"
              defaultValue={location}
              labelText="Location"
            />
            <SubmitBtn formBtn />
          </div>
        </Form>
      </Wrapper>
    </>
  );
}
