import React from 'react';
import './style.css';

export class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
    this.onHandleClick = this.onHandleClick.bind(this);
  }
  onHandleClick(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }
  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.onHandleClick}>
        <h1>Move the mouse around!</h1>
        <p>
          The current mouse position is ({this.state.x}, {this.state.y})
        </p>
      </div>
    );
  }
}
export default class App extends React.Component {
  render() {
    console.log('Render from parent');
    return (
      <div>
        <ChildComponent />
      </div>
    );
  }
}
