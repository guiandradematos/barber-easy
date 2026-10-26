
function Cabecalho({ aoAgendar }) {
  return (
    <header className="cabecalho">
      <a href="#inicio" className="logotipo">
        BARBER<span>EASY</span>
      </a>

      <nav className="menu-navegacao" aria-label="Navegação principal">
        <a href="#inicio">Início</a>
        <a href="#servicos">Serviços</a>
        <a href="#agendamento">Agendamento</a>
      </nav>

      <button
        type="button"
        className="botao-cabecalho"
        onClick={aoAgendar}
      >
        Agendar agora
      </button>
    </header>
  )
}

export default Cabecalho
