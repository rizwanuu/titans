import React, { useContext, useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { commonMessages } from "@temp/intl";
import { useAuth, useCart } from "@saleor/sdk";

import Media from "react-media";
import { Link } from "react-router-dom";
import ReactSVG from "react-svg";

// import { DemoBanner } from "@components/atoms";
import classNames from "classnames";
import {
  MenuDropdown,
  Offline,
  Online,
  OverlayContext,
  OverlayTheme,
  OverlayType,
} from "..";
import * as appPaths from "../../app/routes";
import { maybe } from "../../core/utils";
// import NavDropdown from "./NavDropdown";
import { TypedMainMenuQuery } from "./queries";

import cartImg from "../../images/titanCart.svg";
// import hamburgerHoverImg from "../../images/hamburger-hover.svg";
import hamburgerImg from "../../images/hamburger.svg";
import logoImg from "../../images/TitanLogo.svg";
import searchImg from "../../images/search.svg";
import userImg from "../../images/titanUser.svg";
import {
  mediumScreen,
  smallScreen,
} from "../../globalStyles/scss/variables.scss";
import "./scss/index.scss";

interface MainMenuProps {
  demoMode: boolean;
}

const MainMenu: React.FC<MainMenuProps> = ({ demoMode }) => {
  const overlayContext = useContext(OverlayContext);

  const { user, signOut } = useAuth();
  const { items } = useCart();

  const handleSignOut = () => {
    signOut();
  };

  const cartItemsQuantity =
    (items &&
      items.reduce((prevVal, currVal) => prevVal + currVal.quantity, 0)) ||
    0;

  const [activeDropdown] = useState<string>(undefined);

  useEffect(() => {
    if (activeDropdown) {
      overlayContext.show(OverlayType.mainMenuNav, OverlayTheme.modal);
    } else {
      overlayContext.hide();
    }
  }, [activeDropdown]);

  // const showDropdownHandler = (itemId: string, hasSubNavigation: boolean) => {
  //   if (hasSubNavigation) {
  //     setActiveDropdown(itemId);
  //   }
  // };

  // const hideDropdownHandler = () => {
  //   if (activeDropdown) {
  //     setActiveDropdown(undefined);
  //   }
  // };

  return (
    <header
      style={{ paddingBottom: "1%", backgroundColor: "#E9E9E9" }}
      className={classNames({
        "header-with-dropdown": !!activeDropdown,
      })}
    >
      <div className="mainContainer">
        <nav className="main-menu" id="header">
          <div className="main-menu__left">
            <TypedMainMenuQuery renderOnError displayLoader={false}>
              {({ data }) => {
                const items = maybe(() => data.shop.navigation.main.items, []);

                return (
                  <ul>
                    <Media
                      query={{ maxWidth: mediumScreen }}
                      render={() => (
                        <li
                          data-test="toggleSideMenuLink"
                          className="main-menu__hamburger"
                          onClick={() =>
                            overlayContext.show(
                              OverlayType.sideNav,
                              OverlayTheme.left,
                              { data: items }
                            )
                          }
                        >
                          <ReactSVG
                            path={hamburgerImg}
                            className="main-menu__hamburger--icon"
                          />
                          {/* <ReactSVG
                            path={hamburgerHoverImg}
                            className="main-menu__hamburger--hover"
                          /> */}
                        </li>
                      )}
                    />
                    <Media
                      query={{ minWidth: mediumScreen }}
                      render={() =>
                        <Link to={appPaths.baseUrl}>
                          <img src={logoImg} alt="logo" />
                        </Link>
                        // items.map(item => {
                        //   const hasSubNavigation = !!item?.children?.length;
                        //   return (
                        //     <li
                        //       data-test="mainMenuItem"
                        //       className="main-menu__item"
                        //       key={item.id}
                        //     >
                        //       <NavDropdown
                        //         overlay={overlayContext}
                        //         showDropdown={
                        //           activeDropdown === item.id && hasSubNavigation
                        //         }
                        //         onShowDropdown={() =>
                        //           showDropdownHandler(item.id, hasSubNavigation)
                        //         }
                        //         onHideDropdown={hideDropdownHandler}
                        //         {...item}
                        //       />
                        //     </li>
                        //   );
                        // })
                      }
                    />
                    <Online>
                      <Media
                        query={{ maxWidth: mediumScreen }}
                        render={() => (
                          <>
                            {user ? (
                              <MenuDropdown
                                suffixClass="__rightdown"
                                head={
                                  <li className="main-menu__icon main-menu__user--active">
                                    <ReactSVG path={userImg} />
                                  </li>
                                }
                                content={
                                  <ul className="main-menu__dropdown">
                                    <li data-test="mobileMenuMyAccountLink">
                                      <Link to={appPaths.accountUrl}>
                                        <FormattedMessage
                                          {...commonMessages.myAccount}
                                        />
                                      </Link>
                                    </li>
                                    <li data-test="mobileMenuOrderHistoryLink">
                                      <Link to={appPaths.orderHistoryUrl}>
                                        <FormattedMessage
                                          {...commonMessages.orderHistory}
                                        />
                                      </Link>
                                    </li>
                                    <li data-test="mobileMenuAddressBookLink">
                                      <Link to={appPaths.addressBookUrl}>
                                        <FormattedMessage
                                          {...commonMessages.addressBook}
                                        />
                                      </Link>
                                    </li>
                                    <li
                                      onClick={handleSignOut}
                                      data-test="mobileMenuLogoutLink"
                                    >
                                      <FormattedMessage
                                        {...commonMessages.logOut}
                                      />
                                    </li>
                                  </ul>
                                }
                              />
                            ) : (
                              <li
                                data-test="mobileMenuLoginLink"
                                className="main-menu__icon"
                              >
                                <Link to={appPaths.baseUrl}>
                                  <img src={logoImg} alt="logo" />
                                </Link>
                              </li>
                            )}
                          </>
                        )}
                      />
                    </Online>
                  </ul>
                );
              }}
            </TypedMainMenuQuery>
          </div>

          <div className="main-menu__right">
            <ul>
              <li
                data-test="menuSearchOverlayLink"
                className="main-menu__search"
                onClick={() =>
                  overlayContext.show(OverlayType.search, OverlayTheme.right)
                }
              >
                <ReactSVG path={searchImg} /><br />
                <Media
                  query={{ minWidth: smallScreen }}
                  render={() => (
                    <span>
                      <FormattedMessage {...commonMessages.search} />
                    </span>
                  )}
                />
              </li>
              <Online>
                <Media
                  query={{ minWidth: mediumScreen }}
                  render={() => (
                    <>
                      {user ? (
                        <MenuDropdown
                          head={
                            <li className="main-menu__icon main-menu__user--active">
                              <ReactSVG path={userImg} />
                            </li>
                          }
                          content={
                            <ul className="main-menu__dropdown">
                              <li data-test="desktopMenuMyAccountLink">
                                <Link to={appPaths.accountUrl}>
                                  <FormattedMessage
                                    {...commonMessages.myAccount}
                                  />
                                </Link>
                              </li>
                              <li data-test="desktopMenuOrderHistoryLink">
                                <Link to={appPaths.orderHistoryUrl}>
                                  <FormattedMessage
                                    {...commonMessages.orderHistory}
                                  />
                                </Link>
                              </li>
                              <li data-test="desktopMenuAddressBookLink">
                                <Link to={appPaths.addressBookUrl}>
                                  <FormattedMessage
                                    {...commonMessages.addressBook}
                                  />
                                </Link>
                              </li>
                              <li
                                onClick={handleSignOut}
                                data-test="desktopMenuLogoutLink"
                              >
                                <FormattedMessage {...commonMessages.logOut} />
                              </li>
                            </ul>
                          }
                        />
                      ) : (
                        <Link to={appPaths.loginSignupPage}>
                          <li
                            data-test="desktopMenuLoginOverlayLink"
                            className="main-menu__icon"
                          >
                            <ReactSVG path={userImg} />
                            <Media
                              query={{ minWidth: smallScreen }}
                              render={() => (
                                <span>
                                  <FormattedMessage {...commonMessages.account} />
                                </span>
                              )}
                            />
                          </li>
                        </Link>
                      )}
                    </>
                  )}
                />
                <Link to={appPaths.cart}>
                  <li
                    data-test="menuCartOverlayLink"
                    className="main-menu__icon main-menu__cart"
                  >
                    <ReactSVG path={cartImg} />
                    <Media
                      query={{ minWidth: smallScreen }}
                      render={() => (
                        <span>
                          <FormattedMessage {...commonMessages.cart} />
                        </span>
                      )}
                    />
                    {cartItemsQuantity > 0 ? (
                      <span className="main-menu__cart__quantity">
                        {cartItemsQuantity}
                      </span>
                    ) : null}
                  </li>
                </Link>
              </Online>
              <Offline>
                <li className="main-menu__offline">
                  <Media
                    query={{ minWidth: mediumScreen }}
                    render={() => (
                      <span>
                        <FormattedMessage defaultMessage="Offline" />
                      </span>
                    )}
                  />
                </li>
              </Offline>
            </ul>
          </div>
        </nav>


        <Media
          query={{ minWidth: mediumScreen }}
          render={() => (
            <>
              <hr style={{ margin: "1% 2%", color: "rgba(50, 50, 50, 0.2)" }} />
              <div className="nav-bottom">
                <div className="nav-bottom__left">
                  <Link to={appPaths.baseUrl}>
                    <div className="nav-bottom__products">products</div>
                  </Link>
                  <Link style={{ marginRight: "50%" }} to={appPaths.baseUrl}>
                    <div className="nav-bottom__accessories">accessories</div>
                  </Link>
                </div>
                <div className="nav-bottom__right">
                  <Link to={appPaths.baseUrl}>
                    <div className="nav-bottom__customization">x series customization</div>
                  </Link>
                </div>
              </div>
            </>
          )}
        />
      </div>
    </header>
  );
};

export default MainMenu;
