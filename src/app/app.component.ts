import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { InputAddComponent } from './Componens/input-add/input-add.component';
import { TableToDsplayComponent } from './Componens/table-to-dsplay/table-to-dsplay.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    InputAddComponent,
    TableToDsplayComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'toDoAngular';
  ngOnInit() {
    const storedProducts = localStorage.getItem('products1');
    if (storedProducts) {
      this.products1 = JSON.parse(storedProducts);
    }
  }

  products1: any[] = [
    {
      id: 1,
      title: 'Product1',
    },
    {
      id: 2,
      title: 'Product2',
    },
    {
      id: 3,
      title: 'Product3',
    },
    {
      id: 4,
      title: 'Product4',
    },
    {
      id: 5,
      title: 'Product5',
    },
    {
      id: 6,
      title: 'Product6',
    },
  ];

  addNewTodo(newtodo: any) {
    this.products1.push({
      id: Math.round(Math.random() * 10000),
      title: newtodo,
    });
    this.updateLocalStorage();
  }

  removeFromArray(todo: any) {
    this.products1 = this.products1.filter((product) => {
      console.log(todo);
      return todo != product.id;
    });
    this.updateLocalStorage();
  }
  updateLocalStorage() {
    localStorage.setItem('products1', JSON.stringify(this.products1));
  }
}
