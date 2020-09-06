export default function seaFood() {
  const seaFoodStr =
    "tuna – tuńczyk;salmon – łosoś;carp – karp;eel – węgorz;sardine – sardynka;cod – dorsz;herring – śledź;trout – pstrąg;bass – okoń;pike – szczupak;shrimps/prawns – krewetki;mussels – małże;crayfish – rak;crab – krab;lobster – homar";
  const seaFoodData = seaFoodStr.split(";");
  const seaFoodList = [];
  seaFoodData.forEach((e) => seaFoodList.push(e.substr(0, e.indexOf(" – "))));
  return seaFoodList;
}
