// Componente botão (caracteristicas e como chamar ele)

const buttonStyle = {
    backgroundColor: "purple",
    color:"white",
    fontFamily: "TimesNewRoman",
    fontSize:"3em"
}

const Buttonzin = ({name,...rest}) => { //rest é o restante(sempre ultimo), tirando o antes dele
        return(
            <button style = {buttonStyle} {...rest}>{name}</button>
        )

}


export default Buttonzin