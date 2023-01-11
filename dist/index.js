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
        this._courseCount = 1;
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get getCourseCount() {
        return this._courseCount;
    }
    set setCourseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count cannot be less than 2");
        }
        this._courseCount = courseNum;
    }
}
const ivan = new User("ivan@ivan.com", "ivan", 20);
ivan.city = "Nairobery";
