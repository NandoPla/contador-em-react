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
        //setCount(oldState => oldState + 1) feito para ajudar em performance (callback) - principio da imutalibidade
         
         if (count < 10) {
            setCount (count + 1)
         }
    }

    function subtrairContador() {

        if (count > 0)
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

// impedir que abaixe de 0
// impedir que passe de 10