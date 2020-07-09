//this clas does calculate the area of rectangle
class Rectangle {
    constructor(height,width,color) {
      this.height = height;
      this.width = width;
      this.color=color;
    }
    calcArea() {
  
        return this.height * this.width;
}
}
//here we are creating an instance for rcatangle classand passing the variables
let rect=new Rectangle(4,5,'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());