import { Component } from '@angular/core';
import { Router , NavigationExtras} from '@angular/router';
import { RestProvider } from 'src/providers/rest/rest';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  favNoticias : any;
  newsList = [];
  newsDestacadas : any;
  categorias :any;
  bandera : boolean = false;
  
  constructor(private router: Router,public restProvider : RestProvider) {
    this.consultarNewsDestacadas();
    this.categorias = JSON.parse(localStorage.getItem('categorias'));
    this.getNewsCategorias();
  }

  getNewsCategorias(){
    console.log("igreso");
    if(this.categorias != null){
      for (var i = 0; i < 9; i++) {
        if(this.categorias[i].estado == 'True'){
          console.log("rnvontro");
          this.bandera = true;
          this.consultarNewsCategoria(i)
        }
      }
    }else{
      this.restProvider.getNews()
      .then(data => {
        this.newsList=this.newsList.concat(data);
        console.log(this.newsList);
      });
    }
  }

  consultarNewsDestacadas() {
    this.restProvider.getDestacadas()
    .then(data => {
      this.newsDestacadas = data;
    });
  }

  consultarNewsCategoria(categoria) {
    this.restProvider.getNewsCategoria(categoria)
    .then(data => {
      this.newsList=this.newsList.concat(data);
      console.log(this.newsList);
    });
  }

  saveNews(news){
    console.log(news);
    if(localStorage.getItem('favoritos')==null){
      var pal = [];
      pal[0] = news 
      localStorage.setItem("favoritos",JSON.stringify(pal));
    }else{
      var serch = JSON.parse(localStorage.getItem('favoritos'));
      serch.push(news);
      localStorage.setItem("favoritos",JSON.stringify(serch));
    }
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

  doRefresh(event) {
    this.newsList = [];
    this.categorias = JSON.parse(localStorage.getItem('categorias'));
    this.getNewsCategorias();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
