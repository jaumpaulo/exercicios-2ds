import "./style.css"

export default function FormulariPersonagens({ ...rest, setNome, setClasse }) {
    return(
        <>
            <form {...rest}>
                <input
                 type="text"
                 onChange={(e) => {setNome(e.target.value)}} 
                 placeholder="Digite nome" 
                />

                <input 
                 type="text" 
                 onChange={(e) => {setClasse(e.target.value)}}
                 placeholder="Digite classe" 
                />

                <button type="submit">Cadastrar Personagem</button>
            </form>
        </>
    )
}