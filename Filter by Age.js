function filterByAge(arr) {
    let person1= {name: arr[1], age: Number(arr[2])};
    let person2 = {name: arr[3], age: Number(arr[4])};
 
    if (person1.age >= Number(arr[0])) {
        console.log(person1);
    }
 
    if (person2.age >= Number(arr[0] ) ){
        console.log(person2);
    }
}
 var arr=['12', 'Ivan', '15', 'Asen', '9'];
filterByAge(arr); 