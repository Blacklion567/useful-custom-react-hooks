import { useState } from "react";


export default function useToggle(defaultValue) {

  const [value, setValue] = useState(defaultValue);

  const ToggleValue = (value) => {
    setValue(curretValue => typeof value === 'boolean' ? value : !curretValue);
  };

  return [value, ToggleValue];

}
