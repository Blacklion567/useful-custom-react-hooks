import { useEffect, useState } from "react";
import useEventListener from "../../useful-custom-react-hooks/src/13-useEventListener/useEventListener";

const useMediaQuery = (mediaQuery) => {
  const [isMatch, setIsMatch] = useState(false);
  const [mediaQueryList, setMediaQueryList] = useState(null);

  useEffect(() => {
    const list = window.matchMedia(mediaQuery);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);
  useEventListener('change', e => setIsMatch(e.matches), mediaQueryList);

  return isMatch;
};


export default useMediaQuery;
