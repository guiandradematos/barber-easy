
import { useState } from 'react'
import Paginacao from './Paginacao.jsx'

function ListaAgendamentos() {
  const [paginaAtual, definirPaginaAtual] = useState(1)

  const agendamentos = [
    { nome: 'João Silva', servico: 'Corte', horario: '09:00' },
    { nome: 'Pedro Santos', servico: 'Barba', horario: '09:30' },
    {
      nome: 'Lucas Oliveira',
      servico: 'Corte e barba',
      horario: '10:00',
    },
    {
      nome: 'Gabriel Souza',
      servico: 'Sobrancelha',
      horario: '10:30',
    },
    { nome: 'Rafael Costa', servico: 'Corte', horario: '11:00' },
    { nome: 'Marcos Lima', servico: 'Barba', horario: '11:30' },
    {
      nome: 'Felipe Alves',
      servico: 'Corte e barba',
      horario: '12:00',
    },
    { nome: 'Bruno Rocha', servico: 'Corte', horario: '12:30' },
  ]

  const agendamentosPorPagina = 3

  const totalDePaginas = Math.ceil(
    agendamentos.length / agendamentosPorPagina
  )

  const indiceInicial = (paginaAtual - 1) * agendamentosPorPagina

  const agendamentosVisiveis = agendamentos.slice(
    indiceInicial,
    indiceInicial + agendamentosPorPagina
  )

  function mudarPagina(novaPagina) {
    if (novaPagina >= 1 && novaPagina <= totalDePaginas) {
      definirPaginaAtual(novaPagina)
    }
  }

  return (
    <section className="secao-agendamentos" id="lista-agendamentos">
      <p className="subtitulo">ORGANIZAÇÃO E PRATICIDADE</p>
      <h2>Agendamentos recentes</h2>

      <p className="descricao-agendamentos">
        Confira alguns exemplos de horários registrados no sistema.
      </p>

      <div className="lista-registros">
        {agendamentosVisiveis.map((agendamento, indice) => (
          <article className="cartao-agendamento" key={agendamento.nome}>
            <div className="icone-calendario" aria-hidden="true">
              {indiceInicial + indice + 1}
            </div>

            <div className="dados-agendamento">
              <h3>{agendamento.nome}</h3>
              <p>{agendamento.servico}</p>
            </div>

            <span className="horario-agendamento">
              {agendamento.horario}
            </span>
          </article>
        ))}
      </div>

      <Paginacao
        totalPaginas={totalDePaginas}
        paginaAtual={paginaAtual}
        aoMudarPagina={mudarPagina}
      />
    </section>
  )
}

export default ListaAgendamentos
