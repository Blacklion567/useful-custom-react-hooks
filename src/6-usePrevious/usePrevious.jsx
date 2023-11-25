import { useRef } from "react";

const usePrevious = (defaultValue) => {

  const currentRef = useRef(defaultValue);
  const previousRef = useRef();


  if (currentRef.current !== defaultValue) {
    previousRef.current = currentRef.current;
    currentRef.current = defaultValue;
  }
  return previousRef.current;
};

export default usePrevious;
