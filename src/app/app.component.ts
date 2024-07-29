import { Component, VERSION } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gridView = '';

  todo = [
    'menu1',
    'menu2',
    'menu3',
    'menu4',
    'menu5',
    'menu6',
    'menu7',
    'menu8'
  ];

  done = ['menu9', 'menu10', 'menu11', 'menu12'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  gridViewChange(str) {
    switch (str) {
      case '2by2':
        this.gridView = '2by2';
        break;
      case '4by2':
        this.gridView = '4by2';
        break;
      case '3by5':
        this.gridView = '3by5';
        break;
      default:
        this.gridView = '';
        break;
    }
    console.log('changegrid!!');
  }
}
