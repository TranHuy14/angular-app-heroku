import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test', 'Test',  'https://cdn.tgdd.vn/2020/11/CookProduct/1-1200x676-22.jpg'),
    new Recipe('Test', 'Test',  'https://cdn.tgdd.vn/2020/11/CookProduct/1-1200x676-22.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
