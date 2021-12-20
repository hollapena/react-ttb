import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <h1>Footer is a GIANT Foot</h1>
      <Link to="/">Home</Link>
      <Link to="about">About Me</Link>
      <Link to="display">Display Text</Link>
      <Link to="projects">Projects</Link>
    </div>
  );
}

export default Footer
