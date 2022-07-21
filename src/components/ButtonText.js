import React from "react";

function ButtonText({ active }) {
  return (
    <>
      {active ? (
        <>
          <p>Battery Connected</p>
        </>
      ) : (
        <>
          <p>Battery Disconnected</p>
        </>
      )}
    </>
  );
}

export default ButtonText;
