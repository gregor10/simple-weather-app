export const formatTemperature = (temperature: number, unit = 'celsius') => new Intl.NumberFormat('ka-GE', {
  unit,
  style: 'unit'
}).format(Math.round(temperature))
