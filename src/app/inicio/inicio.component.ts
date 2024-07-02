import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, SwiperOptions, Swiper, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
import { interval } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SwiperModule, HeaderComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InicioComponent {

  config: SwiperOptions = {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,
    //navigation: true,
    autoplay: {
      delay: 1800
    },
    //pagination: { clickable: true },
    //scrollbar: { draggable: true },
    
  };

  slides = [
    {
      image: '../assets/img/nfpa-logo.png',
    },
    {
      
      image: '../assets/img/barnes.png',
    },
    {
      
      image: '../assets/img/Mitsubishi_Electric_logo.svg.png ',
    },
    {
      
      image: '../assets/img/Honda.svg.png',
    },
    {
      
      image: '../assets/img/Weg_logo_blue_vector.png',
    },
    {
      
      image: '../assets/img/Logo-Automex.png',
    },
    {
      
      image: '../assets/img/logo-pedrollo.png',
    },
    {
      
      image: '../assets/img/rp_logo_url.png',
    },
  ];

  title = 'propuesta';
  correo = 'inversionaic@gmail.com'
  mensaje = 'Hola, un gusto atenderte, somos AIC INGENIERIA, en que te podemos asesorar? '

  constructor(public router: Router) {

  }

  sendWhatsapp() {
    window.open(`https://api.whatsapp.com/send?phone=+573128502119&text=${this.mensaje}`)
  }

  detalle(nombre: string){
    
    this.router.navigate(['/detalles'],   { queryParams: { nombre: nombre} })

    
  }

  construccion(nombre: string){
    
    this.router.navigate(['/construccion'],   { queryParams: { nombre: nombre} })

    
  }
}
