export default function Painel({ children }) {
    return(
            <div
      style={{
        border: "2px solid #5d00ff",
        borderRadius: "10px",
        padding: "20px",
        margin: "10px",
        backgroundColor: "#ffffff",
      }}
    >
      {children}
    </div>
    )
}