import { useState } from "react";

import "./Switch.css";

type SwitchProps<T> = {
  data: [T, T];
  onToggle: (value: T) => void;
  enabled?: boolean;
};

function Switch<T>({ data, onToggle, enabled = false }: SwitchProps<T>) {
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

{/* <Switch data={["Вкл", "Выкл"]} onToggle={onSwitchToggle} enabled /> */}

// const onSwitchToggle = (value: string) => {
//   console.log({ value }); // {value: 'Выкл'}
//   console.log( value ); // Выкл
// };