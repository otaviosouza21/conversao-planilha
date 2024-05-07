import React from "react";
import ExcelConverter from "./ExcelConverter";

const InputFile = () => {
  const [mandaFile, setMandaFile] = React.useState(null);
  function handleChange(event) {
    const file = event.target.files[0];
    setMandaFile(file);
  }
  return (
    <div>
      <input
        id="fileInput"
        accept=".xlsx, .xls, .csv"
        type="file"
        onChange={handleChange}
      />
      {mandaFile && <ExcelConverter file={mandaFile} />}
    </div>
  );
};

export default InputFile;
