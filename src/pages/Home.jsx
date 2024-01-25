import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/addnew">Addnew</Link>
        </li>
        <li>
          <Link to="/addnewone">AddnewOne</Link>
        </li>
        <li>
          <Link to="/landingpagesignin">LandingPageSignIn</Link>
        </li>
        <li>
          <Link to="/landingpagesigninone">LandingPageSignInOne</Link>
        </li>
        <li>
          <Link to="/landingpagejoinin">LandingPageJoinIn</Link>
        </li>
        <li>
          <Link to="/landingpageexplorelist">LandingPageExploreList</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
