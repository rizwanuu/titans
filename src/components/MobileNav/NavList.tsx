import "./scss/index.scss";

import * as React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import ReactSVG from "react-svg";
import { commonMessages } from "@temp/intl";

import { baseUrl } from "../../app/routes";
import NavItem, { INavItem } from "./NavItem";

import backImg from "../../images/arrow-back.svg";
import logoImg from "../../images/titans-small.svg";
import crossImg from "../../images/cross.svg";

interface NavListProps {
  items: INavItem[];
  hideOverlay(): void;
}

interface NavListState {
  parent: INavItem | null;
  displayedItems: INavItem[];
}

class NavList extends React.PureComponent<NavListProps, NavListState> {
  state: NavListState = {
    displayedItems: this.props.items,
    parent: null,
  };

  handleShowSubItems = (item: INavItem) => {
    this.setState({ parent: item, displayedItems: item.children });
  };

  handleGoBack = () => {
    const grandparent = this.state.parent.parent;

    if (!grandparent) {
      this.setState({ parent: null, displayedItems: this.props.items });
    } else {
      const newParent = this.findItemById(grandparent.id);
      this.setState({
        displayedItems: newParent.children,
        parent: newParent,
      });
    }
  };

  findItemById(id: string): INavItem {
    let match = null;
    function find(item) {
      if (item.id === id) {
        match = item;
        return true;
      }
      return item.children && item.children.some(find);
    }
    this.props.items.some(find);
    return match;
  }

  render() {
    const { hideOverlay } = this.props;
    const { displayedItems, parent } = this.state;

    return (
      <ul>
        {parent ? (
          <li className="side-nav__menu-item side-nav__menu-item-back">
            <span onClick={this.handleGoBack}>
              <ReactSVG path={backImg} /> {parent.name}
            </span>
          </li>
        ) : (
          <>
            <li className="side-nav__menu-item side-nav__menu-item--parent">
              <span className="side-nav__menu-item-close" onClick={hideOverlay}>
                <ReactSVG path={crossImg} />
              </span>
              <Link
                to={baseUrl}
                className="side-nav__menu-item-logo"
                onClick={hideOverlay}
              >
                <ReactSVG path={logoImg} />
              </Link>
            </li>
            <li className="side-nav__menu-item">
              <Link
                to={baseUrl}
                className="side-nav__menu-item-link"
                onClick={hideOverlay}
              >
                <FormattedMessage {...commonMessages.home} />
              </Link>
            </li>
          </>
        )}

        {displayedItems.map(item => (
          <NavItem
            key={item.id}
            hideOverlay={hideOverlay}
            showSubItems={this.handleShowSubItems}
            {...item}
          />
        ))}
      </ul>
    );
  }
}

export default NavList;
