
import { useState } from 'react'
import { useAgendamento } from '../context/AgendamentoContext.jsx'
import BarraProgresso from './BarraProgresso.jsx'

function FormularioAgendamento() {
  const {
    servicoEscolhido: servico,
    setServicoEscolhido: definirServico,
    horarioEscolhido: horario,
    setHorarioEscolhido: definirHorario,
  } = useAgendamento()

  const [confirmado, definirConfirmado] = useState(false)

  const progresso = confirmado
    ? 100
    : horario
      ? 75
      : servico
        ? 50
        : 0

  const servicos = ['Corte', 'Barba', 'Sobrancelha']

  const horarios = [
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
  ]

  function escolherServico(item) {
    definirServico(item)
    definirHorario('')
    definirConfirmado(false)
  }

  function escolherHorario(item) {
    definirHorario(item)
    definirConfirmado(false)
  }

  return (
    <section
      className="secao-agendamento-interativo"
      id="formulario-agendamento"
    >
      <p className="subtitulo">SEU HORÁRIO, DO SEU JEITO</p>
      <h2>Agende seu atendimento</h2>

      <BarraProgresso valor={progresso} />

      <p>1. Escolha o serviço desejado</p>

      <div className="opcoes-servicos">
        {servicos.map((item) => (
          <button
            key={item}
            type="button"
            className={
              servico === item
                ? 'opcao-servico servico-selecionado'
                : 'opcao-servico'
            }
            onClick={() => escolherServico(item)}
            aria-pressed={servico === item}
          >
            {item}
          </button>
        ))}
      </div>

      {servico && (
        <>
          <p className="mensagem" role="status">
            Serviço escolhido: {servico}
          </p>

          <div className="selecao-horarios">
            <p>2. Escolha o horário</p>

            <div className="opcoes-horarios">
              {horarios.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={
                    horario === item
                      ? 'opcao-horario horario-selecionado'
                      : 'opcao-horario'
                  }
                  onClick={() => escolherHorario(item)}
                  aria-pressed={horario === item}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {servico && horario && !confirmado && (
        <div className="resumo-agendamento">
          <h3>3. Confirme seu agendamento</h3>

          <p>
            <strong>Serviço:</strong> {servico}
          </p>

          <p>
            <strong>Horário:</strong> {horario}
          </p>

          <button
            type="button"
            className="botao-principal"
            onClick={() => definirConfirmado(true)}
          >
            Confirmar agendamento
          </button>
        </div>
      )}

      {confirmado && (
        <div className="mensagem-confirmacao" role="status">
          <h3>Agendamento confirmado!</h3>

          <p>
            <strong>Serviço:</strong> {servico}
          </p>

          <p>
            <strong>Horário:</strong> {horario}
          </p>

          <p>Seu horário foi confirmado com sucesso.</p>
        </div>
      )}
    </section>
  )
}

export default FormularioAgendamento
