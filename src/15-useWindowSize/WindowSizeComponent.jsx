import useWindowSize from "../15-useWindowSize/useWindowSize";

const WindowSizeComponent = () => {
  const { width, height } = useWindowSize();

  return (
    <>
      {width} x {height}
    </>

  );
};

export default WindowSizeComponent;
