export default function milk() {
  const milkStr =
    "cheese – ser;cottage cheese – twaróg;cream – śmietana;yoghurt – jogurt;butter – masło;margarine – margaryna;bread – chleb;roll – bułka;graham roll – grahamka;bun – słodka bułeczka;pasta – makaron;rice – ryż;cereal – płatki;jam – dżem;flour – mąka;mustard – musztarda;ketchup – keczup;mayonnaise – majonez;spices – przyprawy;salt – sól;pepper – pieprz;sugar – cukier;vinegar – ocet;oil – olej;honey – miód;sausage – kiełbasa;bacon – bekon";
  const milkData = milkStr.split(";");
  const milkList = [];
  milkData.forEach((e) => milkList.push(e.substr(0, e.indexOf(" – "))));
  return milkList;
}
