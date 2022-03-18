import { Box } from "@chakra-ui/react";
import React from "react";

import AppHome from "../../Components/AppHome/index.jsx";
import AppHeader from "../../Components/AppLayouts/AppHeader.jsx";

function index() {
  return (
    <>
      <AppHeader />
      <AppHome />
    </>
  );
}

export default index;
