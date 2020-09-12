import { Component } from '@angular/core';
import { Router , NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  misFavoritos:any

  constructor(private router: Router) {
    this.misFavoritos=JSON.parse(localStorage.getItem('favoritos'));
    console.log(this.misFavoritos);
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

  detailNews(news){
    const navigationExtras: NavigationExtras = {
      state: {
        news
      }
    };
    console.log(navigationExtras);
    this.router.navigate(['/detail-news'], navigationExtras);
  }

}
