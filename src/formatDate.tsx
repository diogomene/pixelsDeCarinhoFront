// Adicione a função formatDate ao seu arquivo
export default function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  const formattedDate = new Date(dateString).toLocaleDateString('pt-BR', options);
  return formattedDate;
}
