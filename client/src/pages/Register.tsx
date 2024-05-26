import Logo from "../components/Logo";
import styled from "styled-components";
import FormRow from "../components/FormRow";
import { Form, redirect, useNavigation, Link } from "react-router-dom";
import customFetch from "../utils/costumFetch";
import { toast } from "react-toastify";
import SubmitBtn from "../components/SubmitBtn";

export const action = async ({ request }: any) => {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration successful");
    return redirect("/login");
  } catch (error) {
    console.log(error);
    toast.error("Email already exists");
    return error;
  }
};

export default function Register() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      <Wrapper>
        <Form className="form" method="post">
          <Logo />
          <h4>Register</h4>
          <FormRow type="text" name="name" defaultValue="" labelText="Name" />
          <FormRow
            type="text"
            name="lastName"
            labelText="lastName"
            defaultValue=""
          />
          <FormRow
            type="email"
            name="email"
            labelText="Email"
            defaultValue=""
          />
          <FormRow
            type="text"
            name="location"
            defaultValue=""
            labelText="Location"
          />

          <FormRow
            type="password"
            name="password"
            labelText="password"
            defaultValue=""
          />
          <SubmitBtn formBtn />
          <p>
            already a member <Link to="/login">Login</Link>
          </p>
        </Form>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }
  h4 {
    text-align: center;
    margin-bottom: 1.38rem;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    color: var(--primary-500);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }
`;
