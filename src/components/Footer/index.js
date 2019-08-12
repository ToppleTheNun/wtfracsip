import React from "react";

import { version } from "../../../package.json";

const Footer = () => (
  <footer id="wtfracsip-footer" className="footer">
    <div className="content has-text-centered">
      <p>
        <strong>WTFRACSIP</strong> by{" "}
        <a href="https://richardharrah.com">Richard Harrah</a>. The source code
        is licensed <a href="https://opensource.org/licenses/ISC">ISC</a>.
      </p>
      <p>Version: {version}</p>
    </div>
  </footer>
);

export default Footer;
