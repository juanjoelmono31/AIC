import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, SwiperOptions, Swiper, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SwiperModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {


  

  // config: SwiperOptions = {
  //   loop: true,
  //   slidesPerView: 3,
  //   spaceBetween: 50,
  //   //navigation: true,
  //   autoplay: {
  //     delay: 3000
  //   },
  //   //pagination: { clickable: true },
  //   //scrollbar: { draggable: true },
    
  // };

  // slides = [
  //   {
  //     image: '../assets/img/nfpa-logo.png',
  //   },
  //   {
      
  //     image: '../assets/img/barnes.png',
  //   },
  //   {
      
  //     image: '../assets/img/Mitsubishi_Electric_logo.svg.png ',
  //   },
  //   {
      
  //     image: '../assets/img/Honda.svg.png',
  //   }
  // ];

  // title = 'propuesta';
  // correo = 'inversionaic@gmail.com'
  // mensaje = 'Hola, un gusto atenderte, somos AIC INGENIERIA, en que te podemos asesorar? '



  // sendWhatsapp() {
  //   window.open(`https://api.whatsapp.com/send?phone=+573128502119&text=${this.mensaje}`)
  // }
}

