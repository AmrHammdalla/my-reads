import React from "react";
import { Link } from "react-router-dom";
class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-danger">
        <div id="MyReads" className="container-fluid">
          <Link to="/" className="navbar-brand">
            My Reads
          </Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
