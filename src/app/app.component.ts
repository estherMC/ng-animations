import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  list = ['Milk', 'Sugar', 'Bread'];

    onAdd(item: string) {
      this.list.push(item);
    }

    onDelete(item: string){
      //var idx = this.list.filter((product)=> item === product).indexOf
      //this.list.slice(idx, 1);
    }
}
