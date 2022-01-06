// Componente botão (caracteristicas e como chamar ele)

const buttonStyle = {
    backgroundColor: "purple",
    color:"white",
    fontFamily: "Arial",
    fontSize:"3em"
}

const Buttonzin = ({name,...rest}) => {
        return(
            <button style = {buttonStyle} {...rest}>{name}</button>
        )

}

export default Buttonzin