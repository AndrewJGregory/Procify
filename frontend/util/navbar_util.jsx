import React from "react";
import { Link } from "react-router-dom";

export const generateLi = (type, category, navbarWord, key, query) => {
  let activeClass = "";
  if (type === navbarWord) {
    activeClass = "active-nav-link";
  }

  return navbarWord === "all results" && type === "results" ? (
    <li className={`nav-link active-nav-link`} key={key}>
      <Link to={`/${category}/results/${query}`}>{`${navbarWord}`}</Link>
    </li>
  ) : navbarWord === "tracks" ? (
    <li className={`nav-link ${activeClass}`} key={key}>
      <Link to={`/${category}/${navbarWord}/${query}`}>songs</Link>
    </li>
  ) : navbarWord === "all results" ? (
    <li className={`nav-link`} key={key}>
      <Link to={`/${category}/results/${query}`}>{`${navbarWord}`}</Link>
    </li>
  ) : (
    <li className={`nav-link ${activeClass}`} key={key}>
      <Link to={`/${category}/${navbarWord}/${query}`}>{`${navbarWord}`}</Link>
    </li>
  );
};
