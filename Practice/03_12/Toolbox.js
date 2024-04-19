class Toolbox {
  constructor(
    //paramaters
    hammers,
    phillips,
    flathead,
    allen,
    tapemeasurer,
    ruler,
    guage,
    screws,
    nuts,
    nails,
    bolts //properties
  ) {
    this.hammers = hammers;
    this.screwdrivers = {
      phillips: phillips,
      flathead: flathead,
      allen: allen,
    };
    this.measuring = {
      tapemeasurer: tapemeasurer,
      ruler: ruler,
      guage: guage,
    };
    this.fasteners = {
      screws: screws,
      nuts: nuts,
      nails: nails,
      bolts: bolts,
    };
  }

  fastenerUpdate(screwsUpdate, nutsUpdate, nailsUpdate, boltsUpdate) {
    this.fasteners.screws = screwsUpdate;
    //don't forget to add the parent variable to get to the properties so they can update!!! this.screws IS WRONG. this.fasteners.screws is correct
    this.fasteners.nuts = nutsUpdate;
    this.fasteners.nails = nailsUpdate;
    this.fasteners.bolts = boltsUpdate;
  }
}

export default Toolbox;
