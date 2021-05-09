import React from "react";

const Mision = ({ mision }) => {
  const { mission_name, description } = mision;
  return (
    <>
      <div className="mision">
        <h2>{mission_name}</h2>
        <p>{description}</p>
      </div>
    </>
  );
};

export default Mision;
