import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/harshadekawade")
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // }, []);
  return (
    <>
      <h2>Github Followers: {data.followers}</h2>
      <div>
        <img src={data.avatar_url} alt="github img" />
      </div>
    </>
  );
}
export default Github;


// better way
export const GitHub = async () => {
  const response = await fetch("https://api.github.com/users/harshadekawade");
  return response.json();
};
