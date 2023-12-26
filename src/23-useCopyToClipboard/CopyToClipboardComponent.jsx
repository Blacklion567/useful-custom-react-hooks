import useCopyToClipboard from "./useCopyToClipboard";

const CopyToClipboardComponent = () => {
  const [copyToClipboard, { success }] = useCopyToClipboard();

  return (
    <>
      <button onClick={() => copyToClipboard('This was copied')}>
        {success ? 'Copied' : 'Copt text'}
      </button>
      <input type="text" />
    </>
  );
};

export default CopyToClipboardComponent;
