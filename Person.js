class Person {
        constructor(firstname, lastname, age, email)
        {
            this.firstname = firstname;
            this.lastname = lastname;
            this.age = age;
            this.email = email;
        }
toString(){
  return ` ${this.firstname} ${this.lastname} (age:${this.age} , email:${this.age})`;
    }

}
let person= new Person('Maria', 'Petterson', 22, 'mp@gmail.com');
console.log(person.toString());