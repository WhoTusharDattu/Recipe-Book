import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply test', 
        'http://i1.wp.com/www.rajnisrecipe.com/wp-content/uploads/2016/12/pasta.jpg?w=1422',
    [new Ingredient('Meat', 1),
new Ingredient('French Fries', 20)]),
        new Recipe('New Test Recipe', 'This is Awesome','https://www.ndtv.com/cooks/images/kerala.chicken.roast%20%281%29.jpg?downsize=650:400&output-quality=70&output-format=webp',
        [new Ingredient('Potato', 2),
    new Ingredient('Buns', 1)])
    
      ];
      constructor(private slService: ShoppingListService){}
      getRecipes () {
          return this.recipes.slice();
      }

      getRecipe(index: number){
          return this.recipes.slice()[index];
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addNewIngredients(ingredients);
      }
}