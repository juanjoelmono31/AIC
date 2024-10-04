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
    slidesPerView: 1, // Muestra una diapositiva a la vez
    spaceBetween: 10, // Espacio entre las diapositivas
    pagination: { clickable: true }, // Permite clic en la paginación
    navigation: true, // Agrega controles de navegación
    loop: true, // Permite que el carrusel sea infinito
    autoplay: {
      delay: 3000, // Intervalo de reproducción automática
      disableOnInteraction: false, // Reanuda la reproducción automática después de la interacción
    },
    breakpoints: {
      320: { // Para móviles más pequeños
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: { // Pantallas móviles medianas
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: { // Tablets
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: { // Pantallas grandes
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
    updateOnWindowResize: true, // Asegura que se actualice en cambios de tamaño
  };

  slides = [
    {
      image: '../assets/img/nfpa-logo.png',
    },
    {
      
      image: '../assets/img/BRISTOL.png',
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
    {
      image: '../assets/img/tornatech.jpg',
    },
  ];

  title = 'propuesta';
  correo = 'gerencia@aicingenieria.co'
  mensaje = 'Hola, estoy interesado en alguno de sus productos'

  constructor(public router: Router) {

  }

  sendWhatsapp() {
    window.open(`https://api.whatsapp.com/send?phone=+573207820809&text=${this.mensaje}`)
  }

  detalle(nombre: string){
    
    this.router.navigate(['/detalles'],   { queryParams: { nombre: nombre} })

    
  }

  construccion(nombre: string){
    
    this.router.navigate(['/construccion'],   { queryParams: { nombre: nombre} })

    
  }
}
