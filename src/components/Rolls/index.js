import React, { useState } from "react";

import Buttons from "../Buttons";
import {
  generateRolesForFives,
  generateRolesForThrees
} from "../../services/generator";
import Roll from "../Roll";

const Rolls = () => {
  const [threes, setThrees] = useState(true);
  const generatedRoles = threes
    ? generateRolesForThrees(3)
    : generateRolesForFives(5);
  const [rolls, setRolls] = useState(generatedRoles);
  return (
    <section className="section">
      <div className="container">
        <Buttons setRolls={setRolls} setThrees={setThrees} threes={threes} />
        <div className="columns">
          {rolls.map((roll, index) => (
            <Roll key={`roll-${index}`} roll={roll} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rolls;
