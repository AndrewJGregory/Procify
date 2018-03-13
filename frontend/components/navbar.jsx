import React from "react";
import * as navbarUtil from "../util/navbar_util.jsx";
import shortid from "shortid";

const Navbar = ({ category, type, navbarWords, query }) => {
  const lis = navbarWords.map(navbarWord =>
    navbarUtil.generateLi(type, category, navbarWord, shortid.generate(), query)
  );

  return <ul className="nav-bar-ul">{lis}</ul>;
};

export default Navbar;
