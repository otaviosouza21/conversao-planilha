import React from "react";
import ExportToExcel from "./ExportToExcel";

const Codigos = ({ planilha }) => {
  /* planilha.map(codigo=>console.log(codigo['Codigo'], String(codigo['Codigo']).padEnd(7,"0"))) */
  const data = planilha.map((produto) => ({
    codigo: String(produto["Codigo"]).length === 2 ? String(produto["Codigo"]).padEnd(7, ".0000") : String(produto["Codigo"]).padEnd(7, "0"),
    descricao: produto['Descricao'],
    estoque: produto['Estoque'],
    valor: produto['Valor'],
  }));

  console.log(data);
  return  <ExportToExcel data={data} filename="Produto"/>
};

export default Codigos;
