import { useState } from "react";
import usePrevious from "./usePrevious";

const PreviousComponent = () => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('blacklion567');
  const previousValue = usePrevious(count);

  return (

    <>
      <div>
        {name} - {previousValue}
      </div>
      <div>{name}</div>
      <button
        onClick={() => setCount(currentCount => currentCount + 1)}
      >Increment</button>

      <button
        onClick={() => setName('nocodearea')}
      >Change Name</button>

    </>

  );
};

export default PreviousComponent;
