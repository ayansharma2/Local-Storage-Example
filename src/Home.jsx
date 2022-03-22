import { Component } from "react";
import Form from "./Form";
import NavBar from "./NavBar";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
    let loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn === "1") {
      this.setState({
        isLoggedIn: true,
      });
    }
  }

  changeState = (state) => {
    this.setState({
      isLoggedIn: state,
    });
    if (state) {
      localStorage.setItem("loggedIn", "1");
    } else {
      localStorage.setItem("loggedIn", "0");
    }
  };

  render() {
    return (
      <div className="flex flex-col bg-slate-900 w-full h-full fixed">
        <NavBar
          isLoggedIn={this.state.isLoggedIn}
          changeState={this.changeState}
        />
        {!this.state.isLoggedIn && <Form changeState={this.changeState} />}
      </div>
    );
  }
}

export default Home;
