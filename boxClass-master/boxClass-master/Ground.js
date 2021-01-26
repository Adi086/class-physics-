class Ground{
    constructor(x,y,width,height){
         var a= {
             isStatic:true
         }

        this.width= width;
        this.height= height;
        this.body=Bodies.rectangle(x,y,this.width, this.height, a)
    }
    display(){
        var pos=this.body.position;
        fill("red")
        rectMode(CENTER);
        rect(pos.x, pos.y,this.width, this.height);
        
    }
}