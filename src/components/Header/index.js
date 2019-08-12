import React from "react";
import { version } from "../../../package.json";

const Header = () => (
  <section id="wtfracsip-header" className="section hero is-primary">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">WTFRACSIP</h1>
        <h2 className="subtitle">
          A role and champion randomizer for League of Legends.
        </h2>
        <h3>Version: {version}</h3>
      </div>
    </div>
  </section>
);

export default Header;
