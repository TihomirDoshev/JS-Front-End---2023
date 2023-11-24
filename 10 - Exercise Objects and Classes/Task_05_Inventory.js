function printHero(array) {
  let heroes = [];
  for (const element of array) {
    let [name, level, items] = element.split(" / ");

    let hero = {
      name,
      level: Number(level),
      items,
    };
    heroes.push(hero);
  }
  heroes.sort((a, b) => a.level - b.level);

  for (const hero of heroes) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  }
}
printHero([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
