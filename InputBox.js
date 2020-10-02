class InputBox{

    constructor(){

    this.input = createInput("Name");
    this.button = createButton('Play');
    }

    display(){

    this.input.position(displayWidth/2,displayHeight/2);
    this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(displayWidth/2+100,displayHeight/2);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
       this.button.style('background', 'lightpink');

       this.button.mousePressed(() => {
        this.input.hide();
        this.button.hide();
    });
    
    }
}
