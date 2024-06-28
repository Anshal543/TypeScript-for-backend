"use strict";
// class User {
//   email: string;
//   name: string;
//   private city:string = "Delhi";
//   constructor(name: string, email: string) {
//     this.name = name;
//     this.email = email;
//   }
// }
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this._courseCount = 1;
        this.city = "Delhi";
    }
    get getEmail() {
        return this.email;
    }
    get getCourseCount() {
        return this._courseCount;
    }
    set setCourseCount(count) {
        this._courseCount = count;
    }
}
class SubUser extends User {
}
const anshal = new User("anshal", "anshal@gmail.com");
// anshal.city = "Noida";
