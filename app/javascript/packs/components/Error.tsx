import React from "react";
import { Link } from "react-router-dom";
function Error() {
  return (
    <div>
      <p>ログインしてください</p>
      <Link to="/">Log in</Link>
    </div>
  );
}

export default Error;
