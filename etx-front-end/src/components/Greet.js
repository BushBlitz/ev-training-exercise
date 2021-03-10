import React from "react";

export const Greet = ({name, heroName}) => {
  name = name || "Phunts";
  heroName = heroName || "VenturePhunts";

  return (
    <div>
      <h1>
        Hello {name} a.ka {heroName}!
      </h1>
    </div>
  );
};
export default Greet;
