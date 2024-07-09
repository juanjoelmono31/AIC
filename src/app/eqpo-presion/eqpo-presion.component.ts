import { Component } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, SwiperOptions, Swiper, Autoplay } from 'swiper';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ProductosService } from '../Services/productos.service';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

@Component({
  selector: 'app-eqpo-presion',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SwiperModule],
  templateUrl: './eqpo-presion.component.html',
  styleUrl: './eqpo-presion.component.css'
})
export class EqpoPresionComponent {


  constructor() {
   
    
  }
}
