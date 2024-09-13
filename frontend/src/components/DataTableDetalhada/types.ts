export interface IngressoDataDetalhado {
    id: number;
    nome: string;
    codigoConsumivel: string;
    valor: number;
    comprovante: string;
    data: Date;
    transacaoID: number
  }
  
// Adicione esta linha para garantir que o arquivo seja tratado como um módulo
export {};