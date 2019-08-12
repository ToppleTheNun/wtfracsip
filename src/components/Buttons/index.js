import React from "react";
import PropTypes from "prop-types";

import {
  generateRolesForThrees,
  generateRolesForFives
} from "../../services/generator";

const Buttons = ({ setRolls, setThrees, threes }) => {
  const handleRerollOnClick = () => {
    if (threes) {
      setRolls(generateRolesForThrees(3));
    } else {
      setRolls(generateRolesForFives(5));
    }
  };
  const handleThreesOnClick = () => {
    setThrees(true);
    setRolls(generateRolesForThrees(3));
  };
  const handleFivesOnClick = () => {
    setThrees(false);
    setRolls(generateRolesForFives(5));
  };
  return (
    <div className="buttons">
      <button className="button" onClick={handleRerollOnClick}>
        Reroll
      </button>
      <button
        className="button"
        disabled={threes}
        onClick={handleThreesOnClick}
      >
        Threes
      </button>
      <button
        className="button"
        disabled={!threes}
        onClick={handleFivesOnClick}
      >
        Fives
      </button>
    </div>
  );
};
Buttons.defaultProps = {
  setRolls: () => {},
  setThrees: () => {},
  threes: true
};
Buttons.propTypes = {
  setRolls: PropTypes.func,
  setThrees: PropTypes.func,
  threes: PropTypes.bool
};

export default Buttons;
