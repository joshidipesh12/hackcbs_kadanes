import React from "react";
// import { Container } from "@mui/material";
import data from "../config.json";
import PostSmall from "../components/PostSmall";
import NavTabs from "./../components/Tabs";
import Sidenav from "./../components/Sidenav";

import "../App.css"

function HomePage() {
  return (
    <>
      <Sidenav />
      <div className="card_container">
        {data.posts.map((item) => (
          <PostSmall key={item.id} {...item} />
        ))}
      </div>
      <NavTabs/>
    </>
  );
}

export default HomePage;
