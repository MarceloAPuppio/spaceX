import React from "react";

const Mision = ({ mision }) => {
  const { title, details } = mision;
  return (
    <>
      <div className="mision">
        <h2>{title}</h2>
        <p>{details}</p>
      </div>
    </>
  );
};

export default Mision;
