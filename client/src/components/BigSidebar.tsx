import Wrapper from "../assets/wrappers/BigSidebar";
import NavLinks from "../utils/NavLinks";
import { useDashoboardContext } from "../pages/DashboardLayout";
import Logo from "./Logo";

export default function BigSidebar() {
  const { sidebar } = useDashoboardContext();

  return (
    <>
      <Wrapper>
        <div
          className={
            sidebar ? "sidebar-container " : "sidebar-container show-sidebar"
          }
        >
          <header>
            <Logo />
          </header>
          <NavLinks isBigSidebar />
        </div>
      </Wrapper>
    </>
  );
}
