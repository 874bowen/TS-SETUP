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

   protected _courseCount: number = 1
   city?: string;
   constructor(
      private email: string, 
      public name: string, 
      public age: number) {
      
   }

   get getAppleEmail(): string {
      return `apple ${this.email}`
   } 

   get getCourseCount(): number {
      return this._courseCount;
   }

   set setCourseCount (courseNum: number) {
      if (courseNum <= 1) {
         throw new Error("Course count cannot be less than 2");
      }
      this._courseCount = courseNum;
   }
}

class SubUser extends User {
   isFamily: boolean = true;
   changeCourseCount(){
      this._courseCount = 4;
   }
}

const ivan = new User("ivan@ivan.com", "ivan", 20)
ivan.city = "Nairobery"

const idah = new SubUser("ida@ivan.com", "idah", 20)

idah.changeCourseCount();