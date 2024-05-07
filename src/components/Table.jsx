import React from 'react'

const Table = ({data}) => {
  return (
    <table>
        <thead>
            <tr>
                <th>DOCUMENTO</th>
                <th>EMISSÃO</th>
                <th>CLIENTE</th>
                <th>VALOR</th>
                <th>VENCIMENTO</th>
            </tr>
        </thead>
            <tbody>
                <tr>
          
                    <td>{titulo[0]['DOCUMENTO']}</td>
                
                </tr>      
            </tbody>
    </table>
  )
}

export default Table