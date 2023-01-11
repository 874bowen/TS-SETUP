"use strict";
console.log("TypeScript is amazing!");
console.log("My dev skills are amazing");
// class User {
//    private email: string;
//    name: string;
//    age: number;
//    city?: string;
//    constructor(email: string, name: string, age: number) {
//       this.email = email;
//       this.name = name;
//       this.age = age;
//    }
// }
class User {
    constructor(email, name, age) {
        this.email = email;
        this.name = name;
        this.age = age;
    }
}
const ivan = new User("ivan@ivan.com", "ivan", 20);
ivan.city = "Nairobery";
