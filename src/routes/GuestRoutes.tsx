import React from "react";
import { Route, Routes } from "react-router-dom";
import screens from "../screens";

function GuestRoutes() {
  return (
    <Routes>
      <Route path="/" element={<screens.Home />} >
        <Route path="home" element={<screens.Home />} />
      </Route>
      <Route element={<screens.Home />} />
    </Routes>
  );
}

export default GuestRoutes;