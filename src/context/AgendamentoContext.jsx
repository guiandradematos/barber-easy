import { createContext, useContext, useState } from 'react';

const AgendamentoContext = createContext();

export function AgendamentoProvider({ children }) {
  const [servicoEscolhido, setServicoEscolhido] = useState('');
  const [horarioEscolhido, setHorarioEscolhido] = useState('');

  const dadosAgendamento = {
    servicoEscolhido,
    setServicoEscolhido,
    horarioEscolhido,
    setHorarioEscolhido,
  };

  return (
    <AgendamentoContext.Provider value={dadosAgendamento}>
      {children}
    </AgendamentoContext.Provider>
  );
}

export function useAgendamento() {
  return useContext(AgendamentoContext);
}