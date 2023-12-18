import { useState } from "react";

const useArray = (defaultValue) => {

  const [array, setArray] = useState(defaultValue);


  const push = (element) => {
    setArray(a => [...a, element]);
  };

  const update = (index, element) => {
    setArray(a => [...a.slice(0, index), element, ...a.slice(index + 1, a.length)]);
  };

  const remove = (index) => {
    setArray(a => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
  };

  const filter = (index) => {
    setArray(a => [...a.filter(index), index !== undefined ? a.filter(index) : a]);
  };

  const clear = () => {
    setArray([]);
  };


  return { array, set: setArray, push, filter, update, remove, clear };

};


export default useArray;
