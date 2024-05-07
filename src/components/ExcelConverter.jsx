import React from 'react'
import Relatorio from './Relatorio';
import * as XLSX from "xlsx";
import Codigos from './Codigos';


const ExcelConverter = ({file}) => {

    const [relatorio, setRelatorio] = React.useState(null);

    React.useEffect(() => {
      if (file) {
        const reader = new FileReader();
  
        reader.onload = (event) => {
          const data = event.target.result;
  
          // Use a biblioteca SheetJS para ler a planilha
          const workbook = XLSX.read(data, { type: "array" });
  
          // Acesse a primeira planilha no arquivo
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
  
          // Converta a planilha em um objeto JSON
          const jsonData = XLSX.utils.sheet_to_json(sheet);
          localStorage.setItem("dados", JSON.stringify(jsonData));
          const datas = localStorage.getItem("dados");
          const parsedData = JSON.parse(datas);
          setRelatorio(parsedData);
        };
  
        reader.readAsArrayBuffer(file);
      }
    }, [file]);
  

  return <>{relatorio &&  <Codigos planilha={relatorio}/>}</>;
}

export default ExcelConverter