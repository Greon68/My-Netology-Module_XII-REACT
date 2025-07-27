import React, { Component } from "react";

export class CircleOfLife extends Component {
  constructor(props) {
    super(props);
    this.elementRef = React.createRef();

    console.log("constructor");
    console.log("props",props);
    console.log("constructor-ref :",this.elementRef);
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.log("render :", Date(), this.elementRef);
    // console.log("render");

    return (
      <article id='circle' className="my-test" ref={this.elementRef}
            onClick={() => console.log("render-ref :", this.elementRef)}>
      
        {/* Hello, World  */}
        <h3>Hello, {this.props.title}</h3>
      </article>
    );
  }
}

CircleOfLife.defaultProps = {
  title: "Born!",
};
