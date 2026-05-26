import "./styles/BotaoCSS.css" 

export default function Botoes({ texto, ...rest }) {
    return(
        <>
            <button type="submit">{texto}</button>
        </>
    )
}