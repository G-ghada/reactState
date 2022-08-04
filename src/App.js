import React from 'react';
import './App.css';
import Person from "./components/Person"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.handleHideComponent = () => {
      this.setState({ show: false });
    };
    this.handleShowComponent = () => {
      this.setState({ show: true });
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.show ? (
          <>
            <button onClick={this.handleHideComponent}>Hide person</button>
            <Person />
          </>
        ) : (
          <button onClick={this.handleShowComponent}>Show person</button>
        )}
      </div>
    );
  }
}

export default App;
