import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Wiener-Schnitzel02.jpg/800px-Wiener-Schnitzel02.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad'],
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/c/c4/Spaghetti_bolognese_%28hozinja%29.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomato'],
    },
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      // eslint-disable-next-line arrow-body-style
      ...this.recipes.find((recipe) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        return recipe.id === recipeId;
      }),
    };
  }

  deleteRecipe(recipeId: string) {
    // eslint-disable-next-line arrow-body-style
    this.recipes = this.recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });

    console.log(this.recipes);
    this.recipesChanged.next(this.recipes);
  }
}
