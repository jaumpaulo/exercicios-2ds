import Profile from "./components/Profile"
import Header from "./components/Pages/Header"
import "./styles/ProfileCSS.css"

export default function App() {
  return(
    <>
      <div className="container">
        <Header />

        <h1>Usuários do Sistema</h1>
        <p>Conheça os membros da nossa equipe</p>
        
        <div className="card">
          <div className="profile-card">
            <Profile 
              foto={"https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fdepositphotos.com%2Fbr%2Fphotos%2Fpessoas-normais.html&ved=0CBYQjRxqFwoTCMCK6Zuut5QDFQAAAAAdAAAAABAG&opi=89978449"}
              nome={"Mariana Silva"}
              idade={29}
              profissao={"Desenvolvedora Frontend"}
            />
          </div>

          <div className="profile-card">
            <Profile 
              foto={"https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fcajamar.sp.gov.br%2Fnoticias%2F2021%2F07%2F14%2Fvacinacao-contra-a-covid-19-para-pessoas-com-38-anos%2F&ved=0CBYQjRxqFwoTCMCK6Zuut5QDFQAAAAAdAAAAABAh&opi=89978449"}
              nome={"João Santos"}
              idade={35}
              profissao={"Designer UX/UI"}
            />
          </div>

          <div className="profile-card">
            <Profile 
              foto={"https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fwww.agendartecultura.com.br%2Fnoticias%2Fnegras-lugar-protagonismo-conheca-fotografia-meneson-conceicao%2F&ved=0CBYQjRxqFwoTCMCK6Zuut5QDFQAAAAAdAAAAABA8&opi=89978449"}
              nome={"Carlos Alberto"}
              idade={41}
              profissao={"Gerente de Projetos"}
            />
          </div>
        </div>
      </div>
    </>
  )
}