
function Paginacao({ totalPaginas, paginaAtual, aoMudarPagina }) {
  return (
    <>
      <nav
        className="navegacao-paginas"
        aria-label="Páginas de agendamentos"
      >
        <button
          type="button"
          className="botao-pagina"
          onClick={() => aoMudarPagina(paginaAtual - 1)}
          disabled={paginaAtual === 1}
          aria-label="Página anterior"
        >
          Anterior
        </button>

        {Array.from({ length: totalPaginas }, (_, indice) => {
          const numeroPagina = indice + 1

          return (
            <button
              type="button"
              key={numeroPagina}
              className={`botao-pagina ${
                paginaAtual === numeroPagina
                  ? 'pagina-selecionada'
                  : ''
              }`}
              onClick={() => aoMudarPagina(numeroPagina)}
              aria-current={
                paginaAtual === numeroPagina ? 'page' : undefined
              }
            >
              {numeroPagina}
            </button>
          )
        })}

        <button
          type="button"
          className="botao-pagina"
          onClick={() => aoMudarPagina(paginaAtual + 1)}
          disabled={paginaAtual === totalPaginas}
          aria-label="Próxima página"
        >
          Próxima
        </button>
      </nav>

      <p className="indicador-pagina">
        Página {paginaAtual} de {totalPaginas}
      </p>
    </>
  )
}

export default Paginacao
