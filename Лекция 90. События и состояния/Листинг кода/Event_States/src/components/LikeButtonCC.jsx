import { Component } from "react";

export class LikeButtonCC extends Component {
  // state = { likes: 10 };

  constructor() {
    super();
    this.state = { likes: 10 };
  }

  handleAddLike = () => {
    this.setState({ likes: this.state.likes + 1 });
  };
  render() {
    return (
      <button onClick={this.handleAddLike}>CC:Add like {this.state.likes}</button>
    );
  }
}
