import '../../Styles/app.css'
function Print({handlePrint}){
    return (<button className = "print-button" onClick = {() => handlePrint()} >Print</button>)
}

export default Print