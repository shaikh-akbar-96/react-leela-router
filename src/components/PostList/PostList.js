import React from "react";
import { Link } from "react-router-dom";

function PostList() {
  return (
    <div>
      <div>
        <h2>Post List</h2>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/list/1">List 1</Link>
          </li>
          <li>
            <Link to="/list/2">List 2</Link>
          </li>
          <li>
            <Link to="/list/3">List 3</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PostList;
