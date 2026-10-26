
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

export default BarraProgresso
