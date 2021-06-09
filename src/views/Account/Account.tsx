import * as React from "react";
import { useIntl } from "react-intl";
import Media from "react-responsive";
import { RouteComponentProps, withRouter } from "react-router";
import { commonMessages } from "@temp/intl";
import { useAuth } from "@saleor/sdk";

import { largeScreen } from "@styles/constants";
import { AccountMenu, AccountMenuMobile } from "@components/molecules";
import { AccountTab, OrdersHistory } from "@pages";
import AddressBook from "../../account/AddressBook/AddressBook";
import {
  accountUrl,
  paymentUrl,
  trackingUrl,
  addressBookUrl,
  baseUrl,
  orderHistoryUrl,
} from "../../app/routes";
import { Breadcrumbs, Loader } from "../../components";

import "./scss/index.scss";

const returnTab: any = (path: string, userDetails, history) => {
  let tabContent = <></>;
  switch (path) {
    case orderHistoryUrl: {
      tabContent = <OrdersHistory {...{ history }} />;
      break;
    }
    case trackingUrl: {
      tabContent = <OrdersHistory {...{ history }} />;
      break;
    }
    case accountUrl: {
      tabContent = <AccountTab />;
      break;
    }
    case addressBookUrl: {
      tabContent = <AddressBook user={userDetails} />;
      break;
    }
    case paymentUrl: {
      tabContent = <AccountTab />;
      break;
    }
    default:
      tabContent = <AccountTab />;
      break;
  }
  return tabContent;
};

const Account: React.FC<RouteComponentProps> = ({ history, match }) => {
  const intl = useIntl();
  const { user, loaded } = useAuth();

  const links = [orderHistoryUrl, trackingUrl, accountUrl, addressBookUrl, paymentUrl];

  if (!loaded) {
    return <Loader />;
  }

  if (!user) {
    history.push(baseUrl);
  }

  return (
    <div className="container">
      <Breadcrumbs
        breadcrumbs={[
          {
            link: match.path,
            value: intl.formatMessage(commonMessages.myAccount),
          },
        ]}
      />
      <div className="account">
        <Media minWidth={largeScreen}>
          <div className="account__menu">
            <AccountMenu links={links} active={match.path} />
          </div>
        </Media>
        <Media maxWidth={largeScreen}>
          <div className="account__menu_mobile">
            <AccountMenuMobile links={links} active={match.path} />
          </div>
        </Media>
        <div className="account__content">
          {user && returnTab(match.path, user, history)}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Account);
