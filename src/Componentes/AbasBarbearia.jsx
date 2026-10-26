
import { useState } from 'react'

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

export default AbasBarbearia
