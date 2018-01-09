import React from 'react';
import { Link } from 'react-router-dom';

export const generateLi = (type, navbarWord, key) => {
  let activeClass = '';
  if (type === navbarWord) {
    activeClass = 'active-nav-link';
  }
  if (navbarWord === 'tracks') {
    return (
      <li className={`nav-link ${activeClass}`} key={key}>
        <Link to={`/collection/${navbarWord}`}>songs</Link>
      </li>
    );
  } else {
    return (
      <li className={`nav-link ${activeClass}`} key={key}>
        <Link to={`/collection/${navbarWord}`}>{`${navbarWord}`}</Link>
      </li>
    );
  }
};