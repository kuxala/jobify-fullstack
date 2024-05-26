import { useDashoboardContext } from "../pages/DashboardLayout";

import links from "../utils/links";
import { NavLink } from "react-router-dom";

export default function NavLinks({ isBigSidebar }: any) {
  const { userName, toggleSidebar, role } = useDashoboardContext();

  return (
    <>
      <div className="nav-links">
        {links.map((link) => {
          const { text, path, icon } = link;
          if (path === "admin" && role.role !== "admin") return;
          return (
            <NavLink
              to={path}
              key={text}
              className="nav-link"
              onClick={isBigSidebar ? null : toggleSidebar}
              // will discuss in a second
              end
            >
              <span className="icon">{icon}</span>
              {text}
            </NavLink>
          );
        })}
      </div>
    </>
  );
}
