export function formatCurrency(value: number) {
  const format = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format;

  return format(value);
}
