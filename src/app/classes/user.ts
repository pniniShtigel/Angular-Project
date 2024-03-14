export class User {
    login(username: string, password: string) {
      return "true";
    }
    constructor(
      public id: number,
      public name: string,
      public adress: string,
      public email: string,
      public password: string
    ) {}
  }
  