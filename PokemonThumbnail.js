import React, { useState } from "react";
import Description from "./Description";

const PokemonThumbnail = ({
  id,
  name,
  image,
  type,
  height,
  weight,
  stat1,
  stat2,
  stat3,
  stat4,
  stat5,
  stat6,
  bs1,
  bs2,
  bs3,
  bs4,
  bs5,
  bs6,
}) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div>
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div>
        <h3>{name.toUpperCase()}</h3>
        <small>Type : {type}</small>
        <button onClick={() => setShow(!show)}>
          {show === true ? "Know less..." : "Know more..."}
        </button>
        {show === true ? <Description /> : <></>}
      </div>
    </div>
  );
};

export default PokemonThumbnail;
