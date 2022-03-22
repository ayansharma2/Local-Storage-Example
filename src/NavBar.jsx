import { Component } from "react";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onStateChanged = () => {
    this.props.changeState(false);
  };
  render() {
    return (
      <div className="flex flex-row bg-purple-900 px-3 py-4 justify-between items-center">
        <span className="text-white font-bold text-base">Login Page</span>
        {this.props.isLoggedIn && (
          <div className="flex flex-row">
            <button
              onClick={this.onStateChanged}
              className="bg-pink-600 py-2 px-5 text-white rounded-xl"
            >
              LogOut
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default NavBar;
