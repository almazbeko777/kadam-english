import React, { useContext } from "react";
import { EnglishContex } from "../../contex";

const WebSites = () => {
  const { resurs } = useContext(EnglishContex);
  console.log(resurs, "llll");
  return <div></div>;
};

export default WebSites;
