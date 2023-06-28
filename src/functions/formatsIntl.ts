export class FormatsIntl {
  priceFormat(price: number) {
    const priceBRL = Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
      price
    );

    return { priceBRL };
  }

  dateFormat(date: string) {
    if (date) {
      const dateBRL = Intl.DateTimeFormat("pt-BR").format(new Date(date));
      return { dateBRL };
    } else {
      return;
    }
  }
}
