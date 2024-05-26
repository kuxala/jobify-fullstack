import { FaUserCircle, FaCaretDown, FaUser } from "react-icons/fa";
import Wrapper from "../assets/wrappers/LogoutContainer";
import { useState } from "react";
import { useDashoboardContext } from "../pages/DashboardLayout";

export default function Logout() {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashoboardContext();
  return (
    <Wrapper>
      <button
        type="button"
        className="btn logout-btn"
        onClick={() => setShowLogout(!showLogout)}
      >
        {user.avatar ? <img src={user.avatar} width="24px" /> : <FaUser />}

        {user?.name}
        <FaCaretDown />
      </button>
      <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
        <button type="button" className="dropdown-btn" onClick={logoutUser}>
          logout
        </button>
      </div>
    </Wrapper>
  );
}
