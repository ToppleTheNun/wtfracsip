import React, { useState } from "react";

import Buttons from "../Buttons";
import {
  generateRolesForFives,
  generateRolesForThrees
} from "../../services/generator";
import Roll from "../Roll";

const initialThreesOrFives =
  process.env.NODE_ENV === "development" && window.Cypress && window.fives
    ? false
    : true;

const Rolls = () => {
  const [threes, setThrees] = useState(initialThreesOrFives);
  const generatedRoles = threes
    ? generateRolesForThrees(3)
    : generateRolesForFives(5);
  const [rolls, setRolls] = useState(generatedRoles);
  return (
    <section id="wtfracsip-rolls" className="section">
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
