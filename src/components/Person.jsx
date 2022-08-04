import React from "react";
import monimage from "../ProfilePhoto.jpg";

class Person extends React.Component {
  //phase one
  constructor(props) {
    super(props);
    //initializing the state
    this.state = {
      fullname: "Ghada bousselmi",
      bio: "web developper",
      imgSrc: monimage,
      profession: "Graphic designer",
      count: 0,
    };
    
    this.handleIncrease = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    this.handleSubmit = () => {
      alert(`you have to pay: ${this.state.count * 5} $`);
    };
  }

  //phase two
  render() {
    return (
      <div>
        <h1 style={{ fontFamily: "cursive" }}>{this.state.fullname}</h1>
        <h2 style={{ fontFamily: "monospace" }}>{this.state.bio}</h2>
        <img
          style={{ height: "120px", width: "100px" }}
          src={this.state.imgSrc}
        />
        <h2 style={{ fontFamily: "monospace" }}>{this.state.profession}</h2>

        <h2> {this.state.count} </h2>
        <button onClick={this.handleIncrease}>Add Count</button>
        <p>total : {this.state.count * 5} </p>
        {/* <button  onClick={this.handleClick}>Click me</button> */}
        <button onClick={this.handleSubmit}>contact</button>
      </div>
    );
  }
  //phase three
  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
    console.log("Component did mount");
  }
  componentDidUpdate() {
    console.log("Component did update");
  }
  componentWillUnmount() {
    console.log("Component did unmount");
    
  }
}

export default Person;
