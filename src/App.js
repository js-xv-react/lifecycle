import React, { Component } from "react";
import "./App.css";
import ChildComponent from "./components/ChildComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "This name will change in 3 sec",
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
        <p>{this.state.name}</p>
        <ChildComponent />
      </div>
    );
  }
}

export default App;
