
import { useEffect } from 'react'

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

export default Toast
