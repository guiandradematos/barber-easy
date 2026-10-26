
import { useState } from 'react'

function PerguntasFrequentes({ perguntas }) {
  const [perguntaAberta, definirPerguntaAberta] = useState(null)

  return (
    <section
      className="secao-perguntas"
      id="perguntas"
      aria-labelledby="titulo-perguntas"
    >
      <p className="subtitulo">TIRE SUAS DÚVIDAS</p>

      <h2 id="titulo-perguntas">Perguntas frequentes</h2>

      <div className="lista-perguntas">
        {perguntas.map((item, indice) => {
          const aberta = perguntaAberta === indice
          const idBotao = `botao-pergunta-${indice}`
          const idResposta = `resposta-pergunta-${indice}`

          return (
            <article className="item-pergunta" key={item.pergunta}>
              <button
                id={idBotao}
                type="button"
                className="botao-pergunta"
                onClick={() =>
                  definirPerguntaAberta(aberta ? null : indice)
                }
                aria-expanded={aberta}
                aria-controls={idResposta}
              >
                <span>{item.pergunta}</span>

                <span aria-hidden="true">
                  {aberta ? '−' : '+'}
                </span>
              </button>

              <div
                id={idResposta}
                className="resposta-pergunta"
                aria-labelledby={idBotao}
                hidden={!aberta}
              >
                {item.resposta}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default PerguntasFrequentes
