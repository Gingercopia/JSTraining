//generate many objects using CLASSES! can only use class after declared. defines properties and methods for everything in class to avoid redeclaring over and over.
class Desk {
  constructor(name, storage, folders, drawerOpen, pens, pencils, markers) {
    this.name = name;
    this.storage = storage;
    this.folders = folders;
    this.drawerOpen = drawerOpen;
    this.writingTools = {
      pensWrong: pens,
      pencilsWrong: pencils,
      markersWrong: markers,
    };
  }

  // Add methods like normal functions:

  /*
  toggleDrawer(drawerStatus) {
    this.drawerOpen = drawerStatus;
  }
*/

  updateWritingTools(pens3, pencils4, markers5) {
    this.writingTools.pensWrong = pens3; //this updates the value of the pens property when the pens1 parameter is input)
    this.writingTools.pencilsWrong = pencils4;
    this.writingTools.markersWrong = markers5;
  }
  /*
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }*/
}

export default Desk;
