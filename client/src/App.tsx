import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateCampaign from "./pages/CreateCampaign";
import Campaign from "./pages/Campaign";
import Profile from "./pages/Profile";
import SideBar from "./components/SideBar";
import Header from "./components/Header";

type Props = {};

const App = (props: Props) => {
  return (
    <div className="relative sm:-8 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <SideBar></SideBar>
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5 mt-6">
        <Header></Header>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile></Profile>} />
        <Route
          path="/create-campaign"
          element={<CreateCampaign></CreateCampaign>}
        ></Route>
        <Route
          path="/campaign-details/:id"
          element={<Campaign></Campaign>}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
