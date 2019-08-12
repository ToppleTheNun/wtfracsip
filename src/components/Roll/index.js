import React, { useState } from "react";
import PropTypes from "prop-types";
import champions from "../../constants/champions";

const Roll = ({ roll }) => {
  const [playerName, setPlayerName] = useState("");
  return (
    <div className="column">
      <div className="card">
        <div className="card-content">
          <div className="content">
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Player Name"
                      value={playerName}
                      onChange={event => setPlayerName(event.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Role</label>
              <p>{roll.role}</p>
            </div>
            <div className="field">
              <label className="label">Letter</label>
              <p>{roll.letter}</p>
            </div>
            <div className="field">
              <label className="label">Champions</label>
              <p>
                {champions
                  .filter(value => value.startsWith(roll.letter))
                  .join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Roll.propTypes = {
  roll: PropTypes.shape({
    role: PropTypes.string.isRequired,
    letter: PropTypes.string.isRequired
  })
};

export default Roll;
