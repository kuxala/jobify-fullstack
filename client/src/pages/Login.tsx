import styled from "styled-components";
import Logo from "../components/Logo";
import FormRow from "../components/FormRow";
import customFetch from "../utils/costumFetch";
import { toast } from "react-toastify";
import {
  Link,
  Form,
  redirect,
  useActionData,
  useNavigate,
} from "react-router-dom";
import SubmitBtn from "../components/SubmitBtn";

export const action = async ({ request }: any) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const errors = { message: "" };
  if (data.password.length < 8) {
    errors.message = "Password must be 8 letters";
    return errors;
  }

  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login successful");
    return redirect("/dashboard");
  } catch (error) {
    toast.error("Login failed");

    console.log(error);
    return errors;
  }
};

export default function Login() {
  const errors: any = useActionData();
  const navigate = useNavigate();

  const loginDemoUser = async () => {
    const data = {
      email: "test@test.com",
      password: "test1234",
    };
    try {
      await customFetch.post("/auth/login", data);
      toast.success("test user authorized successfully");
      navigate("/dashboard");
    } catch (error) {
      toast.error("error while login demo user");
    }
  };

  return (
    <>
      <Wrapper>
        <Form className="form" method="post">
          <Logo />
          <h4>Login</h4>
          <p>
            {errors?.message && (
              <p style={{ color: "red " }}>{errors.message}</p>
            )}
          </p>
          <FormRow type="email" name="email" labelText="email" />

          <FormRow type="password" name="password" labelText="password" />
          <SubmitBtn formBtn />
          <button
            type="submit"
            className="btn btn-block"
            onClick={loginDemoUser}
          >
            Explore as a demo user
          </button>
          <p>
            Not a a member yet <Link to="/register">Register</Link>
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
