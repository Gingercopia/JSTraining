class Dresser {
  constructor(
    drawers,
    handles,
    underwear,
    shortSleeve,
    longSleeve,
    cables,
    router,
    junkDrawers
  ) {
    this.drawers = drawers;
    this.handles = handles;
    this.underwear = underwear;
    this.shirts = {
      shortSleeve: shortSleeve,
      longSleeve: longSleeve,
    };
    this.electronics = {
      cables: cables,
      router: router,
    };
    this.junkDrawers = junkDrawers;
  }
  updatedShirts(shortSleeveUpdate, longSleeveUpdate) {
    this.shirts.shortSleeve = shortSleeveUpdate;
    this.shirts.longSleeve = longSleeveUpdate;
  }
}
export default Dresser;
