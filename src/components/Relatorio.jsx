import React from "react";
import filter from "../functions/filter";
import Table from "./Table";

const Relatorio = ({ relatorio }) => {

  const aVista = filter(relatorio,'Dinheiro')
  const boleto = filter(relatorio,'Boleto')
  const cheque = filter(relatorio,'Cheque')
  const credito = filter(relatorio,'Credito')
  const debito = filter(relatorio,'Debito')


  return <>
 <Table data={aVista} />
  </>
};

export default Relatorio;
