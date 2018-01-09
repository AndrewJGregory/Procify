import React from 'react';
import { Link } from 'react-router-dom';

export const generateLi = (type, navbarWord) => {
  let activeClass = '';
  if (type === navbarWord) {
    activeClass = 'active-nav-link';
  }
  return (
    <li className={`nav-link ${activeClass}`}>
    <Link to={`/collection/${navbarWord}`}>{`${navbarWord}`}</Link>
    </li>
  );
};
