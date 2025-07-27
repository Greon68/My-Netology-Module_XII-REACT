import { useRef } from "react";

export const FileChooser = () => {

  const fileRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("log - fileRef.current?.files : ",fileRef.current?.files);
    console.dir(fileRef.current?.files);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="formFile">FileChooser</label>
      <input type="file" id="formFile" ref={fileRef} multiple />
      <button type="submit">Ok</button>
    </form>
  );
};
