const formatter = Intl.NumberFormat("ru", {
  style: "currency",
  currency: "RUB",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

export function rubles(v) {
  return isNaN(v) ? "Не число" : formatter.format(toRubles(v));
}

export function fromRubles(v) {
  return Number((Number(v) * 100).toFixed(0));
}

export function toRubles(v) {
  return Number(v) / 100;
}
