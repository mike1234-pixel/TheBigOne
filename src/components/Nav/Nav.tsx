import * as React from "react";
import "./Nav.scss";
import YesNav from "./YesNav/YesNav";
import NoNav from "./NoNav/NoNav";

class Nav extends React.Component<{}, { visibleP: boolean }> {
  constructor(props) {
    super(props);
    this.state = {
      visibleP: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      visibleP: !state.visibleP,
    }));
  }

  render() {
    return (
      <div className="triangle-container-container">
        {this.state.visibleP ? <YesNav /> : <NoNav />}
        <div onClick={this.handleClick}>
          <div className="triangle-container">
            <svg height="50" width="50">
              <polygon points="25,6 10,40 40,40" className="triangle" />
              Sorry, your browser does not support inline SVG.
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;

// YesNav is the NavBar
// NoNav is what shown when Nav is toggled off
