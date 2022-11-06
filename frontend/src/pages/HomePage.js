import React from "react";
import data from "../config.json";
import PostSmall from "../components/PostSmall";

import "../App.css";

function HomePage() {
  return (
    <>
      <div className="card_container">
        {data.posts.map((item) => (
          <PostSmall key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
