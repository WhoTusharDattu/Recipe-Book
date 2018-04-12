import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply test', 'http://i1.wp.com/www.rajnisrecipe.com/wp-content/uploads/2016/12/pasta.jpg?w=1422'),
    new Recipe('A Test Recipe', 'This is simply test', 'http://i1.wp.com/www.rajnisrecipe.com/wp-content/uploads/2016/12/pasta.jpg?w=1422')

  ];
  constructor() { }

  ngOnInit() {
  }

}
