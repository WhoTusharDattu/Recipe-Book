import { Ingredient} from '../shared/ingredients.model'
import { Subject } from 'rxjs/Subject';
export class ShoppingListService {
    ingredientChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[]= [
        new Ingredient ('Apples', 5),
        new Ingredient ('Tomatoes', 10),
      ];

      getIngredients() {
          return this.ingredients.slice();
      }

      addIngredients( ingredients: Ingredient) {
          this.ingredients.push(ingredients);
          this.ingredientChanged.next(this.ingredients.slice());
      }
      addNewIngredients(ingredients: Ingredient[]) {
        // for(let ingredient of ingredients){
        //     this.addIngredients(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
      }
}
