import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply test', 'http://i1.wp.com/www.rajnisrecipe.com/wp-content/uploads/2016/12/pasta.jpg?w=1422'),
    new Recipe('New Test Recipe', 'This is Awesome', 'https://www.ndtv.com/cooks/images/kerala.chicken.roast%20%281%29.jpg?downsize=650:400&output-quality=70&output-format=webp')

  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);

  }

}
