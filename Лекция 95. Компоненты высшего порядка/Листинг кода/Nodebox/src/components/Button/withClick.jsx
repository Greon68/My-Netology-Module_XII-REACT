export const withClick = (Component) => {
  const handleClick = () => {
    console.log("Клик выполнен");
  };

  return (props) => {
    return <Component {...props} onClick={handleClick} />;
  };
};
