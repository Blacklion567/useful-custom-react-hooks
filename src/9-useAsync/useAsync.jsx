import { useCallback, useEffect, useState } from "react";

const useAsync = (callback, dependencies) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [value, setValue] = useState();


  const callbackMemorized = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);
    callback().then(setValue).catch(setError).finally(() => setLoading(false));
  }, dependencies);

  useEffect(() => {
    callbackMemorized();
  }, [callbackMemorized]);

  return { loading, error, value };

};

export default useAsync;
