class Packing {
  constructor(
    sexy,
    briefs,
    thongs,
    boxers,
    short,
    long,
    heavy,
    dress,
    linen,
    pants,
    shorts,
    linens,
    flight,
    bus,
    train,
    hotelConfirmation,
    phone
  ) {
    this.underwear = {
      sexy: sexy,
      briefs: briefs,
      thongs: thongs,
      boxers: boxers,
    };
    this.shirts = {
      shortSleeve: short,
      longSleeve: long,
      heavy: heavy,
      dress: dress,
      linen: linen,
    };
    this.pants = {
      pants: pants,
      shorts: shorts,
      linens: linens,
    };
    this.tickets = {
      flight: flight,
      bus: bus,
      train: train,
      hotelConfirmation: hotelConfirmation,
    };
    this.phone = phone;
  }

  ticketTF(flightTF, busTF, trainTF, hotelConfirmationTF) {
    this.tickets.flight = flightTF;
    this.tickets.bus = busTF;
    this.tickets.train = trainTF;
    this.tickets.hotelConfirmation = hotelConfirmationTF;
  }
}

export default Packing;
