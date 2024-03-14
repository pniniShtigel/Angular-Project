export class Category {
  constructor(
    public code: number,
    public name: string,
    public icon: string
  ) {}
  
}

export const Categories: Category[] = [
  new Category(0, 'desserts', '🧁'),
      new Category(1, 'cakes & cookies', '🍩'),
      new Category(2, 'health', '🥗'),
      new Category(3, 'fish', '🍴'),
      new Category(4, 'soup', '🍟'),
    ];
 