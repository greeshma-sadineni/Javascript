function getPersons() {
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

return[
        new person("Maria", "Peter",22,"mp@gmail.com"),
        new person("Lexicon"),
        new person("Stehphn", "larson", 25),
        new person("peter", "jansson",24,"ptr@live.com")
]
    
}
console.log(getPersons().toString());