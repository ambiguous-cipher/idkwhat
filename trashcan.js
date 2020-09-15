
class TrashSides {
    constructor(x, y){
        /*var options = {
            isStatic: false

        }*/
        this.body1 = Bodies.rectangle(x, y, 10, 100, {isStatic: false});
        this.body2 = Bodies.rectangle(x + 50, y + 45, 110, 10, {isStatic: false});
        this.body3 = Bodies.rectangle(x + 100, y, 10, 100, {isStatic: false});
    }
    display(){
        var pos1 = this.body1.position;
        var pos2 = this.body2.position;
        var pos3 = this.body3.position; 
        rectMode(CENTER);
        fill(255);
        rect(pos1.x, pos1.y, 10, 100);
        rect(pos2.x, pos2.y, 100, 10);
        rect(pos3.x, pos3.y, 10, 100);

    }

}