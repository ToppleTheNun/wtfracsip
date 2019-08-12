import React, { useState } from "react";
import PropTypes from "prop-types";

import { generateRolesForThrees } from "../../services/generator";
import Roll from "../Roll";

const Rolls = ({ numberOfRolls }) => {
  const generatedRoles = generateRolesForThrees(numberOfRolls);
  const [roles, setRoles] = useState(generatedRoles);
  return (
    <section className="section">
      <div className="container">
        <button
          className="button"
          onClick={() => setRoles(generateRolesForThrees(numberOfRolls))}
        >
          Reroll
        </button>
        <div className="columns">
          {roles.map((role, index) => (
            <Roll key={`role-${index}`} roll={role} />
          ))}
        </div>
      </div>
    </section>
  );
};
Rolls.defaultProps = {
  numberOfRolls: 1
};
Rolls.propTypes = {
  numberOfRolls: PropTypes.number
};

export default Rolls;
