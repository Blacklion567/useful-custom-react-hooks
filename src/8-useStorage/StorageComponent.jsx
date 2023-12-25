import { useLocalStorage, useSessionStorage } from "./useStorage";


const StorageComponent = () => {

  const [name, setName, removeName] = useSessionStorage("name", "Blacklion567");

  const [age, setAge, removeAge] = useLocalStorage("age", 25);

  return (

    <>
      <div>
        {name} - {age}
      </div>

      <button
        onClick={() => setName("Proline")}
      >Set Name</button>
      <button
        onClick={() => setAge(40)}
      >Set Age</button>
      <button
        onClick={removeName}
      >RemoveName</button>
      <button
        onClick={removeAge}
      >RemoveAge</button>

    </>


  );
};

export default StorageComponent;
