import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply test', 'http://i1.wp.com/www.rajnisrecipe.com/wp-content/uploads/2016/12/pasta.jpg?w=1422'),
        new Recipe('New Test Recipe', 'This is Awesome', 'https://www.ndtv.com/cooks/images/kerala.chicken.roast%20%281%29.jpg?downsize=650:400&output-quality=70&output-format=webp')
    
      ];
      getRecipes () {
          return this.recipes.slice();
      }
}