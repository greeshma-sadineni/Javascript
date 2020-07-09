//this class clculates the distance between the two points
class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;

    }
    static distance(a,b){
       let g =b.x-a.x;
       let h=a.y-b.y;
       let distance=Math.sqrt((g*g)+(h*h));
return distance;
    }
  
}
//creating two instances for the class and passing it to the method
let p1=new Point(5,5);
let p2=new Point(9,8);
//calling the static metod with classname
console.log(Point.distance(p1, p2));