import useMediaQuery from "./useMediaQuery";

const MediaQueryComponent = () => {
  const isLarge = useMediaQuery("(min-width: 1024px)");

  return <div>{isLarge.toString()}</div>;
};


export default MediaQueryComponent;
