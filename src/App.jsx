
import { useState } from 'react'
import './App.css'
import { useAgendamento } from './context/AgendamentoContext.jsx'

import Cabecalho from './Componentes/Cabecalho.jsx'
import FormularioAgendamento from './Componentes/FormularioAgendamento.jsx'
import AbasBarbearia from './Componentes/AbasBarbearia.jsx'
import MenuSuspenso from './Componentes/MenuSuspenso.jsx'
import ListaAgendamentos from './Componentes/ListaAgendamentos.jsx'
import PerguntasFrequentes from './Componentes/PerguntasFrequentes.jsx'
import Toast from './Componentes/Toast.jsx'

function App() {
  const [toastMensagem, definirToastMensagem] = useState('')

  const { servicoEscolhido, horarioEscolhido } = useAgendamento()

  function mostrarToast(mensagem) {
    definirToastMensagem(mensagem)
  }

  function iniciarAgendamento() {
    if (servicoEscolhido && horarioEscolhido) {
      mostrarToast(
        `Você selecionou ${servicoEscolhido} às ${horarioEscolhido}.`
      )
    } else {
      mostrarToast(
        'Agendamento iniciado! Escolha seu serviço e horário abaixo.'
      )
    }

    document
      .getElementById('formulario-agendamento')
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
  }

  const opcoesMenu = [
    {
      texto: 'Ver serviços',
      destino: '#servicos',
      mensagem: 'Você acessou os serviços.',
    },
    {
      texto: 'Agendar atendimento',
      destino: '#formulario-agendamento',
      mensagem: 'Vamos fazer seu agendamento!',
    },
    {
      texto: 'Perguntas frequentes',
      destino: '#perguntas',
      mensagem: 'Confira as perguntas frequentes.',
    },
  ]

  return (
    <div className="aplicativo">
      <Toast
        mensagem={toastMensagem}
        tipo="success"
        aoFechar={() => definirToastMensagem('')}
      />

      <Cabecalho aoAgendar={iniciarAgendamento} />

      <main>
        <section className="apresentacao" id="inicio">
          <div className="conteudo-apresentacao">
            <p className="subtitulo">SEU ESTILO, NOSSA MISSÃO</p>

            <h1>
              Seu visual.
              <br />
              Seu estilo.
              <br />
              <span>Sua barbearia.</span>
            </h1>

            <p className="descricao">
              Um atendimento de qualidade para você cuidar do visual
              e sair com a autoestima renovada.
            </p>

            <button
              type="button"
              className="botao-principal"
              onClick={iniciarAgendamento}
            >
              Agendar meu horário
            </button>
          </div>

          <div className="cartao-apresentacao">
            <span className="icone-barbearia" aria-hidden="true">
              ✂
            </span>

            <p className="etiqueta-cartao">BARBER EASY</p>

            <h2>Seu momento de cuidado começa aqui.</h2>

            <p>
              Praticidade para agendar. Qualidade para transformar.
            </p>
          </div>
        </section>

        <section className="secao-servicos" id="servicos">
          <p className="subtitulo">O QUE OFERECEMOS</p>
          <h2>Nossos serviços</h2>

          <div className="lista-servicos">
            <article className="cartao-servico">
              <span>01</span>
              <h3>Corte</h3>
              <p>Um corte feito para combinar com seu estilo.</p>
            </article>

            <article className="cartao-servico">
              <span>02</span>
              <h3>Barba</h3>
              <p>Cuidado e acabamento para manter seu visual.</p>
            </article>

            <article className="cartao-servico">
              <span>03</span>
              <h3>Sobrancelha</h3>
              <p>Detalhes que fazem a diferença.</p>
            </article>
          </div>
        </section>

        <FormularioAgendamento />

        <AbasBarbearia />

        <MenuSuspenso
          opcoes={opcoesMenu}
          aoSelecionarOpcao={(mensagem) => mostrarToast(mensagem)}
        />

        <section className="secao-agendamento" id="agendamento">
          <p className="subtitulo">É RÁPIDO E FÁCIL</p>

          <h2>Pronto para renovar seu visual?</h2>

          <p>Comece seu agendamento com apenas um clique.</p>

          <button
            type="button"
            className="botao-principal"
            onClick={iniciarAgendamento}
          >
            Quero agendar
          </button>
        </section>
      </main>

      <ListaAgendamentos />

      <PerguntasFrequentes
        perguntas={[
          {
            pergunta: 'Quais serviços a barbearia oferece?',
            resposta:
              'Oferecemos corte de cabelo, barba e sobrancelha.',
          },
          {
            pergunta: 'Como posso agendar um horário?',
            resposta:
              'Escolha o serviço desejado e siga as etapas do agendamento.',
          },
          {
            pergunta: 'Posso cancelar meu agendamento?',
            resposta:
              'Entre em contato com a barbearia para solicitar o cancelamento.',
          },
        ]}
      />

      <footer className="rodape">
        <p>
          © 2026 Barber Easy — Sistema de Agendamento para Barbearia
        </p>
      </footer>
    </div>
  )
}

export default App
