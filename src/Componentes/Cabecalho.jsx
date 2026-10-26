
import { useState } from 'react'

function Cabecalho({ aoAgendar }) {
  const [menuAberto, definirMenuAberto] = useState(false)

  function fecharMenu() {
    definirMenuAberto(false)
  }

  function agendar() {
    fecharMenu()

    if (aoAgendar) {
      aoAgendar()
    }
  }

  return (
    <header className="cabecalho">
      <a
        href="#inicio"
        className="logotipo"
        onClick={fecharMenu}
      >
        BARBER<span>EASY</span>
      </a>

      {/* Botão para abrir e fechar o menu no celular */}
      <button
        type="button"
        className="botao-menu-mobile"
        onClick={() => definirMenuAberto(!menuAberto)}
        aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuAberto}
        aria-controls="menu-principal"
      >
        {menuAberto ? '✕' : '☰'}
      </button>

      {/* Links de navegação */}
      <nav
        id="menu-principal"
        className={`menu-navegacao ${menuAberto ? 'menu-aberto' : ''}`}
        aria-label="Navegação principal"
      >
        <a href="#inicio" onClick={fecharMenu}>
          Início
        </a>

        <a href="#servicos" onClick={fecharMenu}>
          Serviços
        </a>

        <a href="#agendamento" onClick={fecharMenu}>
          Agendamento
        </a>

        {/* Botão exibido dentro do menu no celular */}
        <button
          type="button"
          className="botao-cabecalho botao-menu-agendar"
          onClick={agendar}
        >
          Agendar agora
        </button>
      </nav>

      {/* Botão exibido no cabeçalho do computador */}
      <button
        type="button"
        className="botao-cabecalho botao-agendar-desktop"
        onClick={agendar}
      >
        Agendar agora
      </button>
    </header>
  )
}

export default Cabecalho
