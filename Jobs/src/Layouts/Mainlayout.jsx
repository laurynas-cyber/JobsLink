import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Mainlayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Mainlayout;
