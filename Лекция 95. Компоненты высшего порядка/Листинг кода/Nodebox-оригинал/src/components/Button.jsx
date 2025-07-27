import { withClick } from "./withClick";

const Button = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default withClick(Button);
