
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
    aoSelecionarOpcao?.(opcao.mensagem)
    definirMenuAberto(false)

    if (opcao.destino) {
      document
        .querySelector(opcao.destino)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
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
        <span aria-hidden="true">
          {menuAberto ? '−' : '+'}
        </span>
      </button>

      {menuAberto && (
        <div className="opcoes-dropdown" id="opcoes-dropdown">
          {opcoes.map((opcao) => (
            <button
              key={opcao.destino}
              type="button"
              className="opcao-dropdown"
              onClick={() => selecionarOpcao(opcao)}
            >
              {opcao.texto}
            </button>
          ))}
        </div>
      )}
    </section>
  )
}

export default MenuSuspenso
