import { Component } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, SwiperOptions, Swiper, Autoplay } from 'swiper';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ProductosService } from '../Services/productos.service';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SwiperModule],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {
  detalleProducto: any = [];
  producto: any;
  nombreProducto = '';

  config: SwiperOptions = {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,
    autoplay: {
      delay: 2800
    },


  };

  constructor(public servicio_productos: ProductosService, private route: ActivatedRoute) {

    this.route.queryParams
      .subscribe((params: any) => {
        
        this.nombreProducto = params.nombre
      });

    this.producto = this.servicio_productos.listProductos();

    for (let index = 0; index < this.producto.length; index++) {

      const producto = this.producto[index].nombre;

      if (this.nombreProducto === producto) {
        
        this.detalleProducto.push(this.producto[index])
      }
    }
    
  }
}
