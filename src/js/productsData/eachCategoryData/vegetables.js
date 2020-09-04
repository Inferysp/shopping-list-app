export default function vegetables() {
  const vegetablesStr =
    "marchewka – carrot;pomidor – tomato;ziemniak – potato;pietruszka – parsley;koperek – dill;szczypior – chive;ogórek – cucumber;kalafior – cauliflower;brokuł – broccoli;kapusta – cabbage;czerwona kapusta – red cabbage;kapusta pekińska – chinese leaf;dynia – pumpkin;seler – celery;cebula – onion;czosnek – garlic;sałata – lettuce;szczypior – chives;fasola – bean;kukurydza – corn;papryka – pepper;papryka chili – chilli;zielony groszek – green peas;orzeszek ziemny – peanut;bakłażan – aubergine;korniszon – gherkin;szparagi – yard-long bean;brukselka – brussels sprouts;bób – broad bean;szparag – asparagus;szpinak – spinach;grzyby – mushrooms;pieczarka – portabella mushroom;rzodkiewka – radish;por – leek;chrzan – horseradish;kabaczek – marrow;soczewica – lentils;soja – soybeans";
  const vegetablesData = vegetablesStr.split(";");
  const vegetablesList = [];
  vegetablesData.forEach((e) =>
    vegetablesList.push(e.substr(e.indexOf("– ")).substr(2))
  );
  return vegetablesList;
}
