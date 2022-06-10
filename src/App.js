import React from 'react';
import './style.css';
class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <div>
        <img
          src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="empty"
          style={{ position: 'absolute', left: mouse.x, top: mouse.y }}
        />
      </div>
    );
  }
}
class MouseWithCat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
    //Please bind
    this._onHandleClick = this._onHandleClick.bind(this);
  }
  _onHandleClick(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }
  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this._onHandleClick}>
        {this.props.render(this.state)}
      </div>
    );
  }
}
export default class App extends React.Component {
  render() {
    console.log('Render from parent');
    return (
      <div>
        <h1>Hello world</h1>
        <MouseWithCat render={(_mouse) => <Cat mouse={_mouse} />} />
      </div>
    );
  }
}
