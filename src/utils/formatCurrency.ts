const Currency_formatter = new Intl.NumberFormat(undefined, { style: 'currency', currency: 'EUR' })
export const formatCurrency = (number: number) => {
  return Currency_formatter.format(number)
}
