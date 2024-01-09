import React from "react";
import Typewriter from "typewriter-effect";
import DATA from "../../CV_DATA.json";

function Type() {
  return (
    <Typewriter
      options={{
        strings: DATA.roles,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
