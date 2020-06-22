import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titulo1:string = `"Un paraíso aislado`;
  titulo2:string = `de la ciudad"`;
  texto1:string =`Es el momento para descubrir todo lo`;
  texto2:string =`que Lomas de Jesús tiene para`;
  texto3:string =`ofrecerte.`;
  texto4:string = `SECCIÓN`;
  texto5:string = `NOTICIAS`;
  texto6:string = `COMPROMISO, LEALTAD Y`;
  texto7:string = `AMISTAD`;
  constructor() {
    
   }

  ngOnInit(): void {
    
  }

}
