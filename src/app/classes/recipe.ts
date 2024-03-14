export class Recipe {
    constructor(
      public id: number,
      public name: string,
      public categoryId: number,
      public preparationTime: number,
      public difficulty: number,
      public ingredients: string[],
      public instructions: string[],
      public userId: number,
      public image: string
    ) {}
  }
  