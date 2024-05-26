import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <>
      <div>
        {/* <nav>Eksdoks</nav> */}
        <Outlet />
      </div>
    </>
  );
}
