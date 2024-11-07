import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/harshadekawade")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <h2>Github Followers: {data.followers}</h2>
      <div>
        <img src = {data.avatar_url} alt="github img" />
      </div>
    </>
  );
}
export default Github;
