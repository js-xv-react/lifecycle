import React, { Component } from "react";
import "./App.css";
import ChildComponent from "./components/ChildComponent";
import ComponentWillUnmount from "./components/ComponentWillUnmount";
import GetSnapshotBeforeUpdate from "./components/GetSnapshotBeforeUpdate";
import ShouldComponentUpdate from "./components/ShouldComponentUpdate";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "This name will change in 3 sec",
      show: true,
    };
  }

  // componentDidMount() {
  //   console.log("ComponentDidMount");
  //   setTimeout(() => {
  //     this.setState({ name: `The name was changed ${Math.random()}` });
  //   }, 3000);

  //   // usuall purpose
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }

  render() {
    return (
      <div className="App">
        {/* <p>{this.state.name}</p> */}
        {/* <ChildComponent /> */}
        <ShouldComponentUpdate />
        <GetSnapshotBeforeUpdate />
        <br />
        <br />
        {this.state.show ? <ComponentWillUnmount /> : null}
        {/* toggle button */}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          {this.state.show ? "Unmount Component" : "Mount Component"}
        </button>
      </div>
    );
  }
}

export default App;
