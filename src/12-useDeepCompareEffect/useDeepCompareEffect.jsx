import { useEffect, useRef } from "react";


export default function useDeepCompareEffect(callback, dependencies) {

  const currentDependenciesRef = useRef();

  if (!(currentDependenciesRef.current, dependencies)) {
    currentDependenciesRef.current = dependencies;
  }

  useEffect(callback, [currentDependenciesRef.current]);
}
