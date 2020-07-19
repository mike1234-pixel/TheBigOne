import * as React from "react";

// props type = {}, state type = { value: string }
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
      <div>
        {this.state.visibleP ? <p>NAV</p> : <p>NONAV</p>}
        <button onClick={this.handleClick}>Remove P</button>
      </div>
    );
  }
}

export default Nav;
