import { useRef } from "react";
import useSize from "./useSize";

const SizeComponent = () => {
  const ref = useRef();
  const size = useSize(ref);

  return (
    <>
      <div>{JSON.stringify(size)}</div>
      <textarea ref={ref} cols="30" rows="10"></textarea>
    </>
  );
};


export default SizeComponent;
