import React from "react";

export const withData = (endpoint, dataToState) => (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    fetchData() {
      if (typeof endpoint === "function") {
        endpoint = endpoint(this.props);
      }

      fetch(endpoint)
        .then((result) => result.json())
        .then((data) => this.setState(dataToState(data)));
    }

    componentDidMount() {
      this.fetchData(this.props);
    }

    componentDidUpdate(prevProps, prevState) {
      if (this.props.endpoint !== prevProps.endpoint) {
        this.fetchData(this.props);
      }
    }

    render() {
      console.log(this.props);
      return <Component {...this.props} {...this.state} />;
    }
  };
};


