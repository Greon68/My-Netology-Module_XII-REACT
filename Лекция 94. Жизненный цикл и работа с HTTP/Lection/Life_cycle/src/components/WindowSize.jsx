import { Component } from "react";
import classNames from "classnames";

export class WindowSize extends Component {
  state = {
    width: 0,
    height: 0,
    active: true,
  };

  constructor(props) {
    super(props);
    this.updateWindowSize = this.updateWindowSize.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive() {
    const { active } = this.state;
    this.setState({
      active: !active,
    });
  }

  updateWindowSize() {
    const height = window.innerHeight;
    const width = window.innerWidth;

    this.setState({
      width,
      height,
    });
  }

  componentDidMount() {
    this.updateWindowSize();
  }
  componentDidUpdate() {
    // console.log ("Update")
    const { active } = this.state;
    if (active) {
      window.addEventListener("resize", this.updateWindowSize);
    } else {
      window.removeEventListener("resize", this.updateWindowSize);
    }
  }
  // При закрытии страницы , отключаем обработчик замера размеров окна браузера:
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowSize);
  }
  
  render() {
    const { width, height, active } = this.state;
    // const className = active ?  "window-size window-size_active" : "window-size";
    return (
      <div
        className={classNames("window-size", active && "window-size_active")}
        // className={className}      
        onClick={this.toggleActive}
      >
        {width}x{height}
      </div>
    );
  }
}
