import React from "react";
import { useParams } from "react-router";

const User = () => {
  const { name } = useParams();
  return (
    <>
      <h1>Welcome to the User page</h1>
      <h2>Welcome to the page Mr: {name} </h2>
    </>
  );
};

export default User;
