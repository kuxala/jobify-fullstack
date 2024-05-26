import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import SmallSidebar from "../components/SmallSidebar";
import BigSidebar from "../components/BigSidebar";
import Navbar from "../components/Navbar";
import { createContext, useContext, useEffect, useState } from "react";
import { checkDefaultTheme } from "../App";
import costumFetch from "../utils/costumFetch";
import { toast } from "react-toastify";

const DashboardContext = createContext<any>(null);

export const loader = async () => {
  try {
    const { data } = await costumFetch.get("/users/current-user");

    return data;
  } catch (error) {
    return redirect("/");
  }
};
export default function DashboardLayout() {
  const data: any = useLoaderData();

  const role = { role: data.userWithoutPassword.role };
  const userName = { name: data.userWithoutPassword.name };
  const user = data.userWithoutPassword;
  // user = { name: data.userWithoutPassword.name };
  // console.log("data in dashboard: ", data);
  const [sidebar, setSidebar] = useState(false);
  const [isDarkTheme, setIsDarktheme] = useState(checkDefaultTheme());
  const navigate = useNavigate();

  const toggleDarkTheme = () => {
    const newDarkTheme: any = !isDarkTheme;
    setIsDarktheme(!isDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  const logoutUser = async () => {
    navigate("/");
    await costumFetch.get("/auth/logout");
    toast.success("Logged out successfully");
  };

  return (
    <DashboardContext.Provider
      value={{
        data,
        user,
        userName,
        role,
        sidebar,
        setSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet context={{ user }} />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
}

export const useDashoboardContext = () => useContext<any>(DashboardContext);
