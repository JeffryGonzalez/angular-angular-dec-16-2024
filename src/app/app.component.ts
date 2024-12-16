import { Component, computed, signal } from '@angular/core';
import { NewsComponent } from './areas/news/news.component';

@Component({
  selector: 'app-root',
  template: `
    <section class="container mx-auto">
      <p>Favorite Food (you have {{ count() }} favorite foods)</p>
      @for (food of favoriteFood(); track $index) {
        <p>
          <button (click)="remove(food)">{{ food }}</button>
        </p>
      }
      <div>
        <input type="text" class="text" #newFood />
        <button (click)="add(newFood.value)" class="btn btn-primary">
          Add Food
        </button>
      </div>
      <app-news />
    </section>
  `,
  styles: [],
  imports: [NewsComponent], // put this in the bundle of code you send to the browser.
})
export class AppComponent {
  favoriteFood = signal(['Tacos', 'Beer', 'Chips']);
  count = computed(() => this.favoriteFood().length);
  add(food: string) {
    // this.favoriteFood = [food, ...this.favoriteFood];
    //this.favoriteFood.set([food, ...this.favoriteFood()]);
    this.favoriteFood.update((foods) => [food, ...foods]);
  }
  remove(food: string) {
    this.favoriteFood.set(this.favoriteFood().filter((f) => f !== food));
  }
}
