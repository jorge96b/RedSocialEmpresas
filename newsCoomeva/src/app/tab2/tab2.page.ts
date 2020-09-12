import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  categorias = [
    {
      nombre : "Corredores de Seguros",
      codigo: "0",
      icono : "pin",
      estado : "False",
      color : "primary",
    },
    {
      nombre : "Bancoomeva",
      codigo: "1",
      icono : "wine",
      estado : "False",
      color : "secondary",
    },
    {
      nombre : "FiduCoomeva",
      codigo: "2",
      icono : "wine",
      estado : "False",
      color : "secondary",
    },
    {
      nombre : "Medicina Prepagada",
      codigo: "3",
      icono : "wine",
      estado : "False",
      color : "secondary",
    },
    {
      nombre : "Christus sinergia",
      codigo: "4",
      icono : "wine",
      estado : "False",
      color : "secondary",
    },
    {
      nombre : "Fundacion",
      codigo: "5",
      icono : "wine",
      estado : "False",
      color : "secondary",
    },
    {
      nombre : "Turismo Agencia de viajes",
      codigo: "6",
      icono : "wine",
      estado : "False",
      color : "secondary",
    },
    {
      nombre : "Lake House",
      codigo: "7",
      icono : "wine",
      estado : "False",
      color : "secondary",
    },
    {
      nombre : "Fecoomeva",
      codigo: "8",
      icono : "wine",
      estado : "False",
      color : "secondary",
    }
  ]

  listaCategorias: any;

  constructor() {
    if(localStorage.getItem('categorias')==null){
      this.listaCategorias = this.categorias
    }else{
      this.listaCategorias = JSON.parse(localStorage.getItem('categorias'));
    }
  }

  saveCategoria(){
    localStorage.setItem("categorias",JSON.stringify(this.listaCategorias));
  }

  addFac(num){
    if(this.listaCategorias[num].estado=='False'){
      this.listaCategorias[num].estado='True';
    }else{
      this.listaCategorias[num].estado='False';
    }
  }

}
