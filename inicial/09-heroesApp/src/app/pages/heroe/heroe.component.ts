import { Component, OnInit } from '@angular/core';
import { HeroeModel } from '../../models/heroe.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: HeroeModel = new HeroeModel();

  constructor( private heroesService: HeroesService) { }

  ngOnInit() {
  }

  guardar( form:NgForm){

    if ( form.invalid) {
      console.log('Formulario no válido')
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      type: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();
    
    if ( this.heroe.id){
      this.heroesService.actualizarHeroe(this.heroe)
          .subscribe( resp => {
            console.log(resp);
          });
    }else{      
      this.heroesService.crearHeroe(this.heroe)
          .subscribe( resp => {
            console.log(resp);
          });
    }

    // console.log(form);
    // console.log(this.heroe);
  }
}
