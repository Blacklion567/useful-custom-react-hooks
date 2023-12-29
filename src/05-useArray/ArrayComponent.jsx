import useArray from "./useArray";


const ArrayComponent = () => {

  const { array, set, push, filter, update, remove, clear } = useArray([1, 2, 3, 4, 5, 6]);

  return (
    <>

      <dir>{array.join(',')}</dir>
      <button
        onClick={() => set([1, 2])}
      >Set [1,2]</button>
      <button
        onClick={() => push(10)}
      >Push 10</button>
      <button
        onClick={() => filter(index => index < 3)}
      >Filter Me</button>
      <button
        onClick={() => update(1, 9)}
      >Update 9</button>
      <button
        onClick={() => remove(1)}
      >Remove</button>
      <button
        onClick={clear}
      >Clear</button>


    </>
  );
};

export default ArrayComponent;
