import React from "react";

import ReactQuill from "react-quill";
// import 'react-quill/dist/quill.snow.css';
import "react-quill/dist/quill.bubble.css";

function TextEditor(props) {
  const { value, onChange } = props;

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline"],

      ["code-block"],

      ["link", "image", "video"],
    ],
  };

  return (
    <ReactQuill
      modules={modules}
      style={{ width: "100%", height: "100%", border: '1px solid' }}
      theme="bubble"
      value={value}
      onChange={onChange}
    />
  );
}

export default TextEditor;
