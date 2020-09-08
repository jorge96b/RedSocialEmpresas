import { Component } from '@angular/core';
import { Router , NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  favNoticias : any;

  newsList = [
    {
      categoria: "Coomeva",
      nombre : "Card Title",
      editor : "Editor",
      fecha_creacion : "",
      destacado : "",
      tags : "",
      likes : "",
      dislikes : "",
      resumen : "Card Subtitle",
      detalle : "Keep close to Nature's heart... and break clear away, once in awhile,and climb a mountain or spend a week in the woods. Wash your spirit clean.",
      imagen : "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
    },
    {
      categoria: "Eps",
      nombre : "Card Title",
      editor : "Editor",
      fecha_creacion : "",
      destacado : "",
      tags : "",
      likes : "",
      dislikes : "",
      resumen : "Card Subtitle",
      detalle : "Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.",
      imagen : "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
    },
    {
      categoria: "Eps",
      nombre : "Card Title",
      editor : "Editor",
      fecha_creacion : "",
      destacado : "",
      tags : "",
      likes : "",
      dislikes : "",
      resumen : "Card Subtitle",
      detalle : "Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.",
      imagen : "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
    }
  ]

  constructor(private router: Router) {}

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

}
