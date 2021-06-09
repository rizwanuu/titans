import "./scss/index.scss";

import * as React from "react";
import { FormattedMessage } from "react-intl";
import Media from "react-media";
import { Link } from "react-router-dom";
// import ReactSVG from "react-svg";
import { largeScreen } from "@styles/constants";

import {
  LoginForm,
  Offline,
  OfflinePlaceholder,
  Online,
  // Overlay,
  OverlayContextInterface,
  // OverlayTheme,
  // OverlayType,
} from "../..";
import RegisterForm from "./RegisterForm";

// import closeImg from "../../../images/x.svg";
// import ForgottenPassword from "./ForgottenPassword";
import Facebook from "../../../images/facebook.png";
import Google from "../../../images/google.png";

import * as appPaths from "../../../app/routes";


class Login extends React.Component<
  { overlay: OverlayContextInterface; active?: "login" | "register" },
  { active: "login" | "register" }
> {
  static defaultProps = {
    active: "login",
  };

  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
    };
  }

  changeActiveTab = (active: "login" | "register") => {
    this.setState({ active });
  };

  render() {
    // const { overlay } = this.props;
    // const { show, hide } = overlay;

    return (
      <div className="login">
        <Online>
          <Media
            query={{ minWidth: largeScreen }}
            render={() => (
              <>
                <div className="login__content">
                  <div
                    onClick={() => this.changeActiveTab("login")}
                    style={{
                      width: "50%",
                      padding: "2rem 4rem",
                      backgroundColor: this.state.active === "login" ? "#F4F4F4" : "#E5E5E5"
                    }}
                  >
                    <h1 className="signin">Sign In</h1>
                    <p className="signintext" style={{ color: "black" }}>Sign in to your Titan account</p>
                    <LoginForm hide={() => false} />
                    <Link to={appPaths.forgotPassword}>
                      <p className="signintext">I don’t remember my password</p>
                    </Link>
                  </div>
                  <div
                    onClick={() => this.changeActiveTab("register")}
                    style={{
                      width: "50%",
                      padding: "2rem 4rem",
                      backgroundColor: this.state.active === "register" ? "#F4F4F4" : "#E5E5E5"
                    }}
                  >
                    <h1 className="signin">New Account</h1>
                    <RegisterForm hide={() => false} />
                  </div>
                </div>
              </>
            )}
          />

          <Media
            query={{ maxWidth: largeScreen }}
            render={() => (
              <>
                <div className="login__tabs">
                  <span
                    data-test="loginTab"
                    onClick={() => this.changeActiveTab("login")}
                    className={this.state.active === "login" ? "active-tab" : ""}
                  >
                    <FormattedMessage defaultMessage="Sign in" />
                  </span>
                  <span
                    data-test="registerTab"
                    onClick={() => this.changeActiveTab("register")}
                    className={this.state.active === "register" ? "active-tab" : ""}
                  >
                    <FormattedMessage defaultMessage="new account" />
                  </span>
                </div>
                <div className="login__content">
                  {this.state.active === "login" ? (
                    <div>
                      <h1 className="signin">Sign In</h1>
                      <p className="signintext" style={{ color: "black" }}>Sign in to your Titan account</p>
                      <LoginForm hide={() => false} />
                      <Link to={appPaths.forgotPassword}>
                        <p className="signintext">I don’t remember my password</p>
                      </Link>
                      {/* <ForgottenPassword
                    onClick={() => {
                      show(OverlayType.password, OverlayTheme.right);
                    }}
                  /> */}
                    </div>
                  ) : (
                    <div>
                      <h1 className="signin">New Account</h1>
                      <RegisterForm hide={() => false} />
                    </div>
                  )}
                </div>
              </>
            )}
          />
          <div className="othermethod">
            <h2>Log in or register using account in different services</h2>
            <div className="two-btn">
              <button className="fb-btn">
                <span className="mari" style={{ color: "white" }}>
                  <img className="face" src={Facebook} alt="facebook-logo" />SIGN WITH FACEBOOK
                </span>
              </button>
              <button className="go-btn">
                <span className="mari">
                  <img className="goog" src={Google} alt="google-logo" />SIGN WITH GOOGLE
                </span>
              </button>
            </div>
          </div>
        </Online>
        <Offline>
          <OfflinePlaceholder />
        </Offline>
      </div>
    );
  }
}

export default Login;
