function countleteroccurancy([string,letter]) {
  let count=0;
for (let charc of string){
if(charc==letter){
    count++;
}
}
console.log(count);
}
countleteroccurancy(["Greeshma","e"]);