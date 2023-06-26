export function formatPrice(price: number) {
  const priceBRL = Intl.NumberFormat("pt-Br", { style: "currency", currency: "BRL" }).format(price);

  return { priceBRL };
}
