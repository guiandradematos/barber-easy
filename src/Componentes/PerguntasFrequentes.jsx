
import { useState } from 'react'

function PerguntasFrequentes({ perguntas }) {
  const [perguntaAberta, definirPerguntaAberta] = useState(null)

  return (
    <section className="secao-perguntas" id="perguntas">
      <p className="subtitulo">TIRE SUAS DÚVIDAS</p>
      <h2>Perguntas frequentes</h2>

      <div className="lista-perguntas">
        {perguntas.map((item, indice) => (
          <article className="item-pergunta" key={item.pergunta}>
            <button
              type="button"
              className="botao-pergunta"
              onClick={() =>
                definirPerguntaAberta(
                  perguntaAberta === indice ? null : indice
                )
              }
              aria-expanded={perguntaAberta === indice}
              aria-controls={`resposta-pergunta-${indice}`}
            >
              <span>{item.pergunta}</span>

              <span aria-hidden="true">
                {perguntaAberta === indice ? '−' : '+'}
              </span>
            </button>

            <div
              id={`resposta-pergunta-${indice}`}
              className="resposta-pergunta"
              hidden={perguntaAberta !== indice}
            >
              {item.resposta}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PerguntasFrequentes
