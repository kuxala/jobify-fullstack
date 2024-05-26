import { FaTimes } from "react-icons/fa";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { useDashoboardContext } from "../pages/DashboardLayout";
import Logo from "./Logo";
import links from "../utils/links";
import { NavLink } from "react-router-dom";
import NavLinks from "../utils/NavLinks";

export default function SmallSidebar() {
  const { toggleSidebar, sidebar } = useDashoboardContext();
  return (
    <>
      <Wrapper>
        <div
          className={
            sidebar ? "sidebar-container show-sidebar" : "sidebar-container"
          }
        >
          <div className="content">
            <button className="close-btn" type="button" onClick={toggleSidebar}>
              <FaTimes />
            </button>
            <header>
              <Logo />
            </header>
            <div className="nav-links">
              {links.map((link) => {
                const { text, path, icon } = link;

                return (
                  <NavLink
                    to={path}
                    key={text}
                    className="nav-link"
                    onClick={toggleSidebar}
                    // will discuss in a second
                    end
                  >
                    <span className="icon">{icon}</span>
                    {text}
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
