function distanceBetweenTwoPoints(arr){
    let x=Number(arr[2])-Number(arr[0]);
    let y=Number(arr[3])-Number(arr[1]);
let distance=Math.sqrt((x*x)+(y*y));
console.log(distance);
}
var values=['2', '4', '5', '0'];
distanceBetweenTwoPoints(values);