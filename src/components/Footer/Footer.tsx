import "./scss/index.scss";

import * as React from "react";

import { SocialMediaIcon } from "..";
import { SOCIAL_MEDIA } from "../../core/config";
import Nav from "./Nav";

const Footer: React.FC = () => (
  <div className="footer" id="footer">
    <Nav />
    <div className="footer__favicons container">
      <span className="footer__span">Follow us</span>
      {SOCIAL_MEDIA.map(medium => (
        <SocialMediaIcon medium={medium} key={medium.ariaLabel} />
      ))}
    </div>
    <p className="footer__bottom">Copyright 2021 Titan Post Drivers. All Rights Reserved.</p>
  </div>
);

export default Footer;
