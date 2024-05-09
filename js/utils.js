export function notANumber(value)  {
  return isNaN(value) || value === ""
}

export function imcCalc(peso, altura) {
  return (peso / (altura / 100) ** 2).toFixed(2);
}

