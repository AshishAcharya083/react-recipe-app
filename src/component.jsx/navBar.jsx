import React from "react";

export default function MyNavBar() {
  return (
    <div>
      <nav>
        <div>
          <h2>Food recipe in Nepali</h2>
          <ul>
            <li>
              <a href="/">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span>Recipe List</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span>Profile</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
