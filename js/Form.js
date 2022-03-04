class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.title = createElement("h1")
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    
    this.input.position(width / 2 - 110, height / 2 - 60);
    this.playButton.position(width / 2 - 90, height / 2 );
    this.greeting.position(width / 2 - 300, height / 2 - 100);
    this.title.position(width/2-200,50);
  }

  setElementsStyle() {
  
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
    this.title.class("gameTitle");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message);
     
    });
  }

  display() {
    this.title.html("FOR THE NATION")
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
