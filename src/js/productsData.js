import dragItemsToggle from './dragItemsToggle';

export default function productsData(categoryArray) {
  const vegetablesStr = 'marchewka – carrot;pomidor – tomato;ziemniak – potato;pietruszka – parsley;koperek – dill;szczypior – chive;ogórek – cucumber;kalafior – cauliflower;brokuł – broccoli;kapusta – cabbage;czerwona kapusta – red cabbage;kapusta pekińska – chinese leaf;dynia – pumpkin;seler – celery;cebula – onion;czosnek – garlic;sałata – lettuce;szczypior – chives;fasola – bean;kukurydza – corn;papryka – pepper;papryka chili – chilli;zielony groszek – green peas;orzeszek ziemny – peanut;bakłażan – aubergine;korniszon – gherkin;szparagi – yard-long bean;brukselka – brussels sprouts;bób – broad bean;szparag – asparagus;szpinak – spinach;grzyby – mushrooms;pieczarka – portabella mushroom;rzodkiewka – radish;por – leek;chrzan – horseradish;kabaczek – marrow;soczewica – lentils;soja – soybeans';
  const fruitsStr = 'jabłko – apple;truskawka – strawberry;malina – raspberry;czereśnia – sweet cherry;wiśnia – cherry;porzeczka – currant;gruszka – pear;winogrona – grapes;śliwka – plum;mandarynka – mandarin;pomarańcza – orange;grejpfrut – grapefruit;cytryna – lemon;banan – banana;ananas – pineapple;jagoda – berry;czarna porzeczka – blackcurrant;czerwona porzeczka – redcurrant;morela – apricot;brzoskwinia – peach;nektarynka – nectarine;arbuz – watermelon;jeżyna – blackberry;poziomka – wild strawberry;agrest – gooseberry;mirabelka – mirabelle;mango – mango;żurawina – cranberry;kokos – coconut;orzeszek pistacjowy – pistachio nut;orzech laskowy – hazelnut;orzech włoski – walnut;migdał – almond;borówka – blueberry;awokado – avocado;persymona – persimmon;pigwa pospolita – quince';
  const milkStr = 'cheese – ser;cottage cheese – twaróg;cream – śmietana;yoghurt – jogurt;butter – masło;margarine – margaryna;bread – chleb;roll – bułka;graham roll – grahamka;bun – słodka bułeczka;pasta – makaron;rice – ryż;cereal – płatki;jam – dżem;flour – mąka;mustard – musztarda;ketchup – keczup;mayonnaise – majonez;spices – przyprawy;salt – sól;pepper – pieprz;sugar – cukier;vinegar – ocet;oil – olej;honey – miód;sausage – kiełbasa;bacon – bekon';
  const bakingStr = 'bagel - obwarzanek;baguette - bagietka;bread - chleb;bread roll - bułka;brown bread - chleb ciemny;bun - słodka bułka;cob bread - okrągły bochenek chleba;croissant - rogal;graham roll - bułka grahamka;granary bread - chleb pełnoziarnisty;loaf of bread - bochenek chleba;pita - pita;pone - chleb z mąki kukurydzianej;roll - bułka;rusk - sucharek;rye bread - żytni chleb;slice of bread - kromka chleba;toast - tost;toast bread - chleb tostowy;wheat bread - pszenny chleb;white bread - chleb biały;wholemeal bread - chleb razowy';
  const meatStr = 'veal – cielęcina;mutton – baranina;pork – wieprzowina;beef – wołowina;lamb – jagnięcina;poultry – drób;turkey – indyk;chicken – kurczak';
  const seaFoodStr = 'tuna – tuńczyk;salmon – łosoś;carp – karp;eel – węgorz;sardine – sardynka;cod – dorsz;herring – śledź;trout – pstrąg;bass – okoń;pike – szczupak;shrimps/prawns – krewetki;mussels – małże;crayfish – rak;crab – krab;lobster – homar';
  const hygieneSrt = 'toilet paper, wipes, shampoo, soap, toothpaste, detergent, dish soap, hygienic cotton balls';
  const vegetablesData = vegetablesStr.split(';');
  const fruitsData = fruitsStr.split(';');
  const milkData = milkStr.split(';');

  const bakingData = bakingStr.split(';');
  const bakingList = [];
  bakingData.forEach((x) => bakingList.push(x.substring(0, x.indexOf(' -'))));

  const meatData = meatStr.split(';');
  const seaFoodData = seaFoodStr.split(';');

  const hygieneList = hygieneSrt.split(', ');

  const vegetablesList = [];
  vegetablesData.forEach((e) => vegetablesList.push(e.substr(e.indexOf('– ')).substr(2)));

  const fruitsList = [];
  fruitsData.forEach((e) => fruitsList.push(e.substr(e.indexOf('– ')).substr(2)));

  const milkList = [];
  milkData.forEach((e) => milkList.push(e.substr(0, e.indexOf(' – '))));

  const meatList = [];
  meatData.forEach((e) => meatList.push(e.substr(0, e.indexOf(' – '))));

  const seaFoodList = [];
  seaFoodData.forEach((e) => seaFoodList.push(e.substr(0, e.indexOf(' – '))));

  const productsList = [vegetablesList,
    fruitsList,
    milkList,
    bakingList,
    meatList,
    seaFoodList,
    hygieneList];

  dragItemsToggle(productsList, categoryArray);
}
