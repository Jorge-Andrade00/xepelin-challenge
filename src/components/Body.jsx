import React from "react";
import RateTable from "./RateTable";

const Body = ({ user }) => {
  return (
    <div className="container">
      <RateTable user={user} />
    </div>
  );
};

export default Body;
