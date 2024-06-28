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
  private _courseCount = 1;
  private city: string = "Delhi";
  constructor(public name: string, public email: string) {}
  get getEmail(): string {
    return this.email;
  }
  get getCourseCount(): number {
    return this._courseCount;
  }
  set setCourseCount(count: number) {
    this._courseCount = count;
  }
}

class SubUser extends User{
  
}

const anshal = new User("anshal", "anshal@gmail.com");
// anshal.city = "Noida";
