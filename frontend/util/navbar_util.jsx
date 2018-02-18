import React from "react";
import { Link } from "react-router-dom";

export const generateLi = (type, category, navbarWord, key) => {
  let activeClass = "";
  if (type === navbarWord) {
    activeClass = "active-nav-link";
  }

  if (navbarWord === "all results" && type === "results") {
    return (
      <li className={`nav-link active-nav-link`} key={key}>
        <Link to={`/${category}/results`}>{`${navbarWord}`}</Link>
      </li>
    );
  } else {
    if (navbarWord === "tracks") {
      return (
        <li className={`nav-link ${activeClass}`} key={key}>
          <Link to={`/${category}/${navbarWord}`}>songs</Link>
        </li>
      );
    } else {
      return (
        <li className={`nav-link ${activeClass}`} key={key}>
          <Link to={`/${category}/${navbarWord}`}>{`${navbarWord}`}</Link>
        </li>
      );
    }
  }
};
