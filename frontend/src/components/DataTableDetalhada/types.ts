export interface IngressoDataDetalhado {
    id: number;
    nome: string;
    codigoConsumivel: string;
    valor: number;
    comprovante: string;
    data: Date;
  }
  
// Adicione esta linha para garantir que o arquivo seja tratado como um módulo
export {};