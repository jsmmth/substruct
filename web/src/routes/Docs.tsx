import { Outlet } from "react-router-dom";
import { Flex, Box } from "substruct-ui";
import Sidebar from "../components/Sidebar";

function Docs() {
  return (
    <Flex minHeight={100} unit="vh" align="stretch">
      <Sidebar />
      <Outlet />
    </Flex>
  );
}

export default Docs;
