export const withLogger = (Component) => {
  return function (props) {
    console.log(props);
    return Component.apply(this, [props]);
  };
};
