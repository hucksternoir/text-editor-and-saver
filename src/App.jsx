import { useState } from "react";
import "./App.css";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";

function App() {
  const [text, setText] = useState("");
  const [textArea, setTextArea] = useState("");

  function saveDocument() {
    const element = document.createElement("a");
    const file = new Blob([textArea], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${text}.txt`;
    document.body.appendChild(element);
    element.click();
  }

  return (
    <div id="container">
      <h1>Text Editor Online</h1>
      <EditText
        editButtonContent={"Edit file name"}
        placeholder="Type your file name here"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          border: "1px solid #fff",
          backgroundColor: "inherit",
          color: "#999",
          borderRadius: "10px",
          width: "100%",
          marginTop: "30px",
        }}
      />
      <EditTextarea
        rows={12}
        placeholder="Type your text here"
        style={{
          border: "1px solid #fff",
          borderRadius: "10px",
          marginTop: "40px",
          backgroundColor: "inherit",
          color: "#999",
          width: "100%",
        }}
        onChange={(e) => setTextArea(e.target.value)}
        value={textArea}
      />
      <input type="button" value="save" id="btnSave" onClick={saveDocument} />
    </div>
  );
}

export default App;
