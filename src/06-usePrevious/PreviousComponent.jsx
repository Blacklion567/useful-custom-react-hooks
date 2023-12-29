import { useState } from "react";
import usePrevious from "./usePrevious";

const PreviousComponent = () => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('Nocodearea');
  const previousRef = usePrevious(count);


  return (
    <>
      <div>
        {name} - {previousRef}
      </div>
      <div>{name}</div>

      <button
        onClick={() => setCount(currentCount => currentCount + 1)}
      >Increment</button>
      <button
        onClick={() => setName('Blacklion567')}
      >Change Name</button>

    </>
  );
};

export default PreviousComponent;
