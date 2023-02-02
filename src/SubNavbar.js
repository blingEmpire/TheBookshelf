import React from "react";
import "./SubNavbar.css";
//import { Link } from "react-router-dom";

function SubNavbar() {
  return (
    <div>
      <h1>Testing SubNavbar</h1>
      <ul id="subNav">
        <li>
          <a href="/allBooks">All Books</a>
        </li>
        <li>
          <a href="/fiction">Fiction</a>
        </li>
        <li>Non-Fiction</li>
        <li>Mystery</li>
        <li>Romance</li>
        <li>Horror</li>
        <li>Manga</li>
      </ul>
    </div>
  );
}

export default SubNavbar;
