"use strict";
console.log("TypeScript is amazing!");
console.log("My dev skills are amazing");
class User {
    constructor(email, name, age) {
        this.city = "";
        this.email = email;
        this.name = name;
        this.age = age;
    }
}
const ivan = new User("ivan@ivan.com", "ivan", 20);
ivan.city = "Nairobery";
