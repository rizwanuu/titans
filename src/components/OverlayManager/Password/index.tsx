import "./scss/index.scss";

import * as React from "react";
// import { FormattedMessage } from "react-intl";
// import ReactSVG from "react-svg";

import {
  Offline,
  OfflinePlaceholder,
  Online,
  // Overlay,
  OverlayContextInterface,
  PasswordResetRequestForm,
} from "../..";

// import closeImg from "../../../images/x.svg";

const Password: React.FC<{ overlay: OverlayContextInterface }> = ({
  // overlay,
}) => (
  // <Overlay testingContext="passwordOverlay" context={overlay}>
  <div className="password-reset">
    <Online>
      <div className="password-reset__content">
        <PasswordResetRequestForm />
      </div>
    </Online>
    <Offline>
      <OfflinePlaceholder />
    </Offline>
  </div>
  // </Overlay>
);

export default Password;
