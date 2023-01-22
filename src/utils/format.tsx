export const formatDateSelect = (dateFormat: any) => {
  var dateDay = dateFormat?.split("T")[0];
  const dia = dateDay?.split("-").reverse()[0];
  const mes = dateDay?.split("-").reverse()[1];
  const ano = dateDay?.substring(0, 4);
  return `${dia}/${mes}/${ano}`;
};

export function dataAtualFormatada(date: Date) {
  var date = new Date(),
    // var date = dateInicial,
    dia = date.getDate().toString().padStart(2, "0"),
    mes = (date.getMonth() + 1).toString().padStart(2, "0"), //+1 pois no getMonth Janeiro começa com zero.
    ano = date.getFullYear(),
    hh = date.getHours(),
    mm = date.getMinutes(),
    ss = date.getSeconds();
  return `${dia}/${mes}/${ano} ${hh}:${mm}:${ss}`;
}
