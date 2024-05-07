import React from 'react';
import { utils, writeFile } from 'xlsx';

const ExportToExcel = ({ data, filename }) => {

  const handleExport = () => {
    // Creates a new workbook and worksheet
    const wb = utils.book_new();
    const ws = utils.json_to_sheet(data);

    // Adds the worksheet to the workbook
    utils.book_append_sheet(wb, ws, "Sheet1");

    // Ensures the filename ends with ".xlsx"
    const exportFilename = filename.endsWith('.xlsx') ? filename : `${filename}.xlsx`;

    // Writes the file to be downloaded
    writeFile(wb, exportFilename);
  };

  return (
    <button onClick={handleExport}>
      Export to Excel
    </button>
  );
}

export default ExportToExcel;