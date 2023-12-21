import useAsync from "../09-useAsync/useAsync";

const useScript = (url) => {
  return useAsync(() => {
    const script = document.createElement("script");
    script.scr = url;
    script.async = true;

    return new Promise((resolve, reject) => {
      script.addEventListener('load', resolve);
      script.addEventListener('error', reject);
      document.body.appendChild(script);
    });
  }, [url]);
};

export default useScript;
