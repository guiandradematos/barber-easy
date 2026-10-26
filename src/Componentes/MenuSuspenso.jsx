
import { useState, useEffect, useRef } from 'react'

function MenuSuspenso({ opcoes, aoSelecionarOpcao }) {
  const [menuAberto, definirMenuAberto] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function fecharAoClicarFora(evento) {
      if (
        menuRef.current &&
        !menuRef.current.contains(evento.target)
      ) {
        definirMenuAberto(false)
      }
    }

    document.addEventListener('mousedown', fecharAoClicarFora)

    return () => {
      document.removeEventListener('mousedown', fecharAoClicarFora)
    }
  }, [])

  function selecionarOpcao(opcao) {
    aoSelecionarOpcao(opcao.mensagem)
    definirMenuAberto(false)
  }

  return (
    <section className="secao-dropdown" ref={menuRef}>
      <p className="subtitulo">NAVEGUE PELO SISTEMA</p>
      <h2>Mais opções</h2>

      <button
        type="button"
        className="botao-dropdown"
        onClick={() => definirMenuAberto(!menuAberto)}
        aria-expanded={menuAberto}
        aria-controls="opcoes-dropdown"
      >
        Opções do sistema
        <span aria-hidden="true">{menuAberto ? '−' : '+'}</span>
      </button>

      {menuAberto && (
        <div className="opcoes-dropdown" id="opcoes-dropdown">
          {opcoes.map((opcao) => (
            <a
              key={opcao.destino}
              href={opcao.destino}
              onClick={() => selecionarOpcao(opcao)}
            >
              {opcao.texto}
            </a>
          ))}
        </div>
      )}
    </section>
  )
}

export default MenuSuspenso
