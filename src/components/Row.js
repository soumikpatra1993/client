import React from 'react'
import './Row.css'
const Row = ({modifiedData, delimiter}) => {
    console.log(modifiedData , delimiter)
    return (
        <div className= "table_wrapper">
            <table>
                <tbody>
                {modifiedData.map((row, key) => {
                return (
                    <tr key = {key}>
                        <td>{row.Name}<span>{delimiter}</span></td>
                <td>{row.Address}{delimiter}</td>
                <td>{row.City}{delimiter}</td>
                <td>{row.Country}{delimiter}</td>
                    </tr>
                )
            })}
                </tbody>
    
            </table>
          
        </div>
    )
}

export default Row
