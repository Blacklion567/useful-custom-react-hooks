import useCookie from "./useCookie";


const CookieComponent = () => {
  const [value, update, remove] = useCookie('name', 'nocodearea');

  return (
    <>
      <div>{value}</div>
      <button onClick={() => update("Blacklion567")}>Change name to Blacklion567</button>
      <button onClick={remove}>Delete Name</button>
    </>
  );
};


export default CookieComponent;
