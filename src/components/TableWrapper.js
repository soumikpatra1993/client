import React, { useState , useEffect } from 'react';
import Row from './Row';
import './TableWrapper.css'

const TableWrapper = (props) => {
    const [delimiter,setDelimiter] = useState(',')
    const [line, setLine] = useState('2')
    console.log(props)
    useEffect(() => {
    }, [delimiter,line])

const isValidDelimiter = (event) => {
    const {value} = event.target;
    if (value === '' || value === ',' || value === '|') {
        setDelimiter(value);
        console.log(delimiter);
    }
}
const isValidNumber = (event) => {
        const {value}  = event.target;
        const {data:{file}} = props;
        if( file && value <= file.length) {
            setLine(value)
        } else if (!file) {
            alert('Please select and upload a file to edit this')
        }

}
const renderRow = ({data:{file}}) => {

    if(file) {
        const rowData = [...file];
        if(rowData.length >= line)
        rowData.length = line
        return (
            <Row delimiter = {delimiter}
            modifiedData = {rowData} />
        )
    } 
}

    return (
        <React.Fragment>
            <div className= "Tab_filters">
                <div>
                <span>Delimiter</span>
                <input value = {delimiter} class="form-control" onChange = {isValidDelimiter}/>
                </div>
                <div>
                <span>Lines</span>
                <input value = {line} class="form-control" onChange = {isValidNumber}/>
                </div>
            </div>
            {renderRow(props)}
        </React.Fragment>

    )
}
export default TableWrapper