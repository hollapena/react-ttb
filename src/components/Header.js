import React from 'react';
import {Link} from 'react-router-dom';

function header() {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="about">About Me</Link>
      <h1>I am a Header LOOK AT ME!</h1>
      <Link to="display">Display Text</Link>
      <Link to="projects">Projects</Link>
    </div>
  );
}

export default header
