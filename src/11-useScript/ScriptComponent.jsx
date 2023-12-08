import useScript from "./useScript";

const ScriptComponent = () => {

  const { loading, error } = useScript(
    "https://code.jquery.com/jquery-3.6.0.min.js"
  );

  if (loading) return <h3>Loading</h3>;
  if (error) return <h2>Error</h2>;

  return <div>{window.$(window).width()}</div>;
};

export default ScriptComponent;
