export default function fruits() {
  const fruitsStr =
    "jabłko – apple;truskawka – strawberry;malina – raspberry;czereśnia – sweet cherry;wiśnia – cherry;porzeczka – currant;gruszka – pear;winogrona – grapes;śliwka – plum;mandarynka – mandarin;pomarańcza – orange;grejpfrut – grapefruit;cytryna – lemon;banan – banana;ananas – pineapple;jagoda – berry;czarna porzeczka – blackcurrant;czerwona porzeczka – redcurrant;morela – apricot;brzoskwinia – peach;nektarynka – nectarine;arbuz – watermelon;jeżyna – blackberry;poziomka – wild strawberry;agrest – gooseberry;mirabelka – mirabelle;mango – mango;żurawina – cranberry;kokos – coconut;orzeszek pistacjowy – pistachio nut;orzech laskowy – hazelnut;orzech włoski – walnut;migdał – almond;borówka – blueberry;awokado – avocado;persymona – persimmon;pigwa pospolita – quince";
  const fruitsData = fruitsStr.split(";");
  const fruitsList = [];
  fruitsData.forEach((e) =>
    fruitsList.push(e.substr(e.indexOf("– ")).substr(2))
  );
  return fruitsList;
}
