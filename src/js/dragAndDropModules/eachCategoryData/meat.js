export default function meat() {
  const meatStr =
    "veal – cielęcina;mutton – baranina;pork – wieprzowina;beef – wołowina;lamb – jagnięcina;poultry – drób;turkey – indyk;chicken – kurczak";
  const meatData = meatStr.split(";");
  const meatList = [];
  meatData.forEach((e) => meatList.push(e.substr(0, e.indexOf(" – "))));
  return meatList;
}
