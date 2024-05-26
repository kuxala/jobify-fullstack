import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaHome } from "react-icons/fa";
import Logo from "./Logo";
import { useDashoboardContext } from "../pages/DashboardLayout";
import Logout from "./Logout";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { toggleSidebar } = useDashoboardContext();
  return (
    <>
      <Wrapper>
        <div className="nav-center">
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignLeft />
          </button>
          <div>
            <Logo />
            <h4 className="logo-text">Dashboard</h4>
          </div>
          <div className="btn-container">
            <ThemeToggle />
            <Logout />
          </div>
        </div>
      </Wrapper>
    </>
  );
}
