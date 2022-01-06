// Tela do site (onde crio a parte visual)

import Buttonzin from "./Button"
import {useState} from "react"

const bodyStyle ={
    backgroundColor : "green",
    height: "100%",
    textAlign:"center"
}

const titleStyle = {
    color:"white",
    fontSize: "1em"
}

function Contador() {

    const [count, setCount] = useState(0)

    function somarContador() { // paranteses sempre colados com o nome da função
        setCount( oldState => oldState + 1) //feito para ajudar em performance
        // setCount (count + 1)
    }

    function subtrairContador() {
        setCount(count - 1)
    }

    function resetContador() {
        setCount(0)
    }

    return (

        <div className="Contador" style={bodyStyle}>
            <p style={titleStyle}>{count}</p>

            <Buttonzin onClick={somarContador} name="Somar"/>
            <Buttonzin onClick={subtrairContador} name="Subtrair"/>
            <Buttonzin onClick={resetContador} name="Reset"/>
        
        </div>

    );
}

export default Contador;