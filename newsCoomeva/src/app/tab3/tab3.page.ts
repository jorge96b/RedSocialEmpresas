import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  misFavoritos:any

  constructor() {
    this.misFavoritos=JSON.parse(localStorage.getItem('favoritos'));
  }

  deleteLocalStorage(posArray: number){
    var array = JSON.parse(localStorage.getItem('favoritos'));
    array.splice(posArray, 1);
    localStorage.setItem("favoritos",JSON.stringify(array));
    this.misFavoritos = JSON.parse(localStorage.getItem('favoritos'));
  }

  doRefresh(event) {
    this.misFavoritos=JSON.parse(localStorage.getItem('favoritos'));

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
