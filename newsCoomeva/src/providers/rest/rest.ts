import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
Generated class for the RestProvider provider.
See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'http://localhost:8000/';
  apiNews = 'noticias';
  apiDestacadas = 'noticiasDestacadas'
  apiCategorias = 'noticiasCategoria/'

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }


  getNews() {
    return new Promise((resolve, reject) => {
    this.http.get(this.apiUrl+this.apiNews)
      .subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
        });
      });
    }


  getDestacadas() {
    return new Promise((resolve, reject) => {
    this.http.get(this.apiUrl+this.apiDestacadas)
      .subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
        });
      });
  }

  getNewsCategoria(categoria) {
    return new Promise((resolve, reject) => {
    this.http.get(this.apiUrl+this.apiCategorias+'?categoria='+categoria)
      .subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
        });
      });
  }

}



