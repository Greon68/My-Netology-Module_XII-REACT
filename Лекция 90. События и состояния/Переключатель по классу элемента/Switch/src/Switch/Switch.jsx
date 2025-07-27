import { useState } from "react";

import "./Switch.css";


const Switch = ({ data, onToggle, enabled = false })=> {
  const [active, setActive] = useState(enabled);
  const className = active ? "switch switch_active" : "switch";

  const toggle = () => {
    const value = !active;
    setActive(value);

    const toggleValue = value ? data[0] : data[1];
    
    onToggle?.(toggleValue);
  };

  return <div className={className} onClick={toggle} />;
}

export default Switch