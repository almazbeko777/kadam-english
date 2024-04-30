import React, { useState } from "react";
import { EnglishContex } from ".";

const RootContex = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState(true);
  const [sign, setSign] = useState(false);
  const [resurs, setResurs] = useState([]);
  const [detail, setDetail] = useState(null);
  return (
    <EnglishContex.Provider
      value={{
        modal,
        user,
        sign,
        resurs,
        detail,
        setDetail,
        setResurs,
        setSign,
        setUser,
        setModal,
      }}
    >
      {children}
    </EnglishContex.Provider>
  );
};

export default RootContex;
