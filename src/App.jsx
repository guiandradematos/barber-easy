
import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [mensagem, definirMensagem] = useState('')
  const [toastMensagem, definirToastMensagem] = useState('')

  function iniciarAgendamento() {
    definirMensagem(
      'Agendamento iniciado! Escolha seu serviço e horário abaixo.'
    )

    document
      .getElementById('formulario-agendamento')
      ?.scrollIntoView({ behavior: 'smooth' })
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
          onClick={iniciarAgendamento}
        >
          Agendar agora
        </button>
      </header>

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

            {mensagem && (
              <p className="mensagem" role="status">
                {mensagem}
              </p>
            )}
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
          aoSelecionarOpcao={(texto) => definirToastMensagem(texto)}
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

          {mensagem && (
            <p className="mensagem" role="status">
              {mensagem}
            </p>
          )}
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

// BARRA DE PROGRESSO

function BarraProgresso({ valor }) {
  return (
    <div className="progresso-container">
      <div className="progresso-texto">
        <span>Progresso do agendamento</span>
        <span>{valor}%</span>
      </div>

      <div
        className="progresso-fundo"
        role="progressbar"
        aria-label="Progresso do agendamento"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={valor}
      >
        <div
          className="progresso-preenchimento"
          style={{ width: `${valor}%` }}
        />
      </div>
    </div>
  )
}

// FORMULÁRIO DE AGENDAMENTO

function FormularioAgendamento() {
  const [servico, definirServico] = useState('')
  const [horario, definirHorario] = useState('')
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

// ACCORDION / PERGUNTAS FREQUENTES

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

// PAGINAÇÃO

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

// LISTA DE AGENDAMENTOS

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

// ABAS

function AbasBarbearia() {
  const [abaAtiva, definirAbaAtiva] = useState('servicos')

  return (
    <section className="secao-abas">
      <p className="subtitulo">SAIBA MAIS</p>
      <h2>Conheça a Barber Easy</h2>

      <div
        className="botoes-abas"
        role="tablist"
        aria-label="Informações da barbearia"
      >
        <button
          type="button"
          role="tab"
          id="aba-servicos"
          aria-controls="painel-aba"
          aria-selected={abaAtiva === 'servicos'}
          className={abaAtiva === 'servicos' ? 'aba ativa' : 'aba'}
          onClick={() => definirAbaAtiva('servicos')}
        >
          Serviços
        </button>

        <button
          type="button"
          role="tab"
          id="aba-horarios"
          aria-controls="painel-aba"
          aria-selected={abaAtiva === 'horarios'}
          className={abaAtiva === 'horarios' ? 'aba ativa' : 'aba'}
          onClick={() => definirAbaAtiva('horarios')}
        >
          Horários
        </button>

        <button
          type="button"
          role="tab"
          id="aba-informacoes"
          aria-controls="painel-aba"
          aria-selected={abaAtiva === 'informacoes'}
          className={
            abaAtiva === 'informacoes' ? 'aba ativa' : 'aba'
          }
          onClick={() => definirAbaAtiva('informacoes')}
        >
          Informações
        </button>
      </div>

      <div
        className="conteudo-aba"
        id="painel-aba"
        role="tabpanel"
        aria-labelledby={`aba-${abaAtiva}`}
      >
        {abaAtiva === 'servicos' && (
          <div>
            <h3>Nossos serviços</h3>
            <p>Corte de cabelo, barba e sobrancelha.</p>
          </div>
        )}

        {abaAtiva === 'horarios' && (
          <div>
            <h3>Horários disponíveis</h3>
            <p>
              Consulte os horários disponíveis na área de agendamento.
            </p>
          </div>
        )}

        {abaAtiva === 'informacoes' && (
          <div>
            <h3>Sobre a Barber Easy</h3>
            <p>
              Um sistema simples e prático para organizar seu atendimento.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

// MENU SUSPENSO

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

// NOTIFICAÇÃO TOAST

function Toast({ mensagem, tipo = 'info', aoFechar }) {
  useEffect(() => {
    if (!mensagem) {
      return undefined
    }

    const temporizador = setTimeout(() => {
      aoFechar()
    }, 3000)

    return () => clearTimeout(temporizador)
  }, [mensagem, aoFechar])

  if (!mensagem) {
    return null
  }

  return (
    <div
      className={`toast toast-${tipo}`}
      role="status"
      aria-live="polite"
    >
      <span>{mensagem}</span>

      <button
        type="button"
        onClick={aoFechar}
        aria-label="Fechar notificação"
      >
        ×
      </button>
    </div>
  )
}

export default App
