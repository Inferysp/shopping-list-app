export default function baking() {
  const bakingStr =
    "bagel - obwarzanek;baguette - bagietka;bread - chleb;bread roll - bułka;brown bread - chleb ciemny;bun - słodka bułka;cob bread - okrągły bochenek chleba;croissant - rogal;graham roll - bułka grahamka;granary bread - chleb pełnoziarnisty;loaf of bread - bochenek chleba;pita - pita;pone - chleb z mąki kukurydzianej;roll - bułka;rusk - sucharek;rye bread - żytni chleb;slice of bread - kromka chleba;toast - tost;toast bread - chleb tostowy;wheat bread - pszenny chleb;white bread - chleb biały;wholemeal bread - chleb razowy";
  const bakingData = bakingStr.split(";");
  const bakingList = [];
  bakingData.forEach((x) => bakingList.push(x.substring(0, x.indexOf(" -"))));
  return bakingList;
}
