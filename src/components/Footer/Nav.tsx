import * as React from "react";

// import { NavLink } from "..";
// import { TypedSecondaryMenuQuery } from "./queries";

import "./scss/index.scss";
import Footerpart from "../../images/Footerpart.png";
import Address from "../../images/address.png";
import Mobile from "../../images/mob.png";
import Email from "../../images/mail.png";

class Nav extends React.PureComponent {
  render() {
    return (
      <footer className="footer-nav">
        <div className="container-fluid p-0">
          <div className="footer">
            <div className="content1">
              <img className="footer-img" src={Footerpart} alt="footer-img" />
            </div>
            <div className="content2">
              <div className="footer-head"> MY ACCOUNT </div>
              <div className="f-data"> My Account </div>
              <div className="f-data"> Orders And Returns </div>
              <div className="f-data"> My Order </div>
              <div className="f-data"> Warranty Registration </div>
              <div className="footer-head"> HELP </div>
              <div className="f-data"> Conditions of Use </div>
              <div className="f-data"> Shipping Policy </div>
              <div className="f-data"> Privacy Policy </div>
              <div className="f-data"> Site Map </div>
            </div>
            <div className="content3">
              <div className="footer-head"> ABOUT </div>
              <div className="d-flex">
                <img className="foot-img" src={Address} alt="address" />
                <div className="f-data">
                  Address: 713 E Austin Blvd Neveda MO 64772
                            </div>
              </div>
              <div className="d-flex">
                <img className="foot-img" src={Mobile} alt="mobile" />
                <div className="f-data">
                  Phone: 702-293-4262
                            </div>
              </div>
              <div className="d-flex">
                <img className="foot-img" src={Email} alt="email-img" />
                <div className="f-data">
                  Email: sales@titanpostdrivers.com
                            </div>
              </div>
              <div className="footer-head mt-4 pt-3"> HOURS </div>
              <div className="f-data"> Mon-Fri: ------------------------------ 8am-5pm </div>
              <div className="f-data"> Sat-Sun: ---------------------------------- Closed </div>
            </div>
          </div>
        </div>
        {/* <div className="container">
          <img src={Footerpart} alt="logo" />
          <TypedSecondaryMenuQuery>
            {({ data }) => {
              return data.shop.navigation.secondary.items.map(item => (
                <div className="footer-nav__section" key={item.id}>
                  <h4 className="footer-nav__section-header">
                    <NavLink item={item} />
                  </h4>
                  <div className="footer-nav__section-content">
                    {item.children.map(subItem => (
                      <p key={subItem.id}>
                        <NavLink item={subItem} />
                      </p>
                    ))}
                  </div>
                </div>
              ));
            }}
          </TypedSecondaryMenuQuery>
        </div> */}
      </footer>
    );
  }
}

export default Nav;
