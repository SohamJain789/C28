
class SlingShot{
    //constraint the body to a point to a point so that the bird body can be attached and projected from a point  
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
 //null means nothing 
 //attaching nothing will free the bird from the constraint

    this.sling.bodyA = null;

    }
    
    display(){
        //display when the body a is not null 
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
    
}