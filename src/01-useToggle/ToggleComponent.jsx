import { useState } from "react";

export default function ToggleComponent() {

  const [value, setValue] = useState(false);

  /*   const handleToggle = () => {
      setValue(!value);
    };

    const handleToggle1 = () => {
      setValue(false);
    };

    const handleToggle2 = () => {
      setValue(true);
    };
   */
  return (
    <>
      <div>
        <h4>{value.toString()}</h4>
        <button
          onClick={() => setValue(!value)}
        >Header</button>
        <button
          onClick={() => setValue(false)}
        >-</button>
        <button
          onClick={() => setValue(true)}
        >+</button>
      </div>
    </>
  );
}
