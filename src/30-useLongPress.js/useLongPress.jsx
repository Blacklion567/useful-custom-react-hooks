import useEventListener from "../13-useEventListener/useEventListener";
import useTimeout from "../02-useTimeout/useTimeout";
import useEffectOnce from "../20-useEffectOnce/useEffectOnce";


const useLongPress = (ref, cb, { delay = 250 } = {}) => {
  const { reset, clear } = useTimeout(cb, delay);
  useEffectOnce(clear);

  useEventListener("mousedown", reset, ref.current);
  useEventListener("touchstart", reset, ref.current);

  useEventListener("mouseup", clear, ref.current);
  useEventListener("mouseleave", clear, ref.current);
  useEventListener("touchend", clear, ref.current);
};


export default useLongPress;
