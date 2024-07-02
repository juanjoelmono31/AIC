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

  detalleProducto: any = [];
  producto: any;
  nombreProducto = '';

  config: SwiperOptions = {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,
    //navigation: true,
    autoplay: {
      delay: 2800
    },
    //pagination: { clickable: true },
    //scrollbar: { draggable: true },

  };

  constructor(public servicio_productos: ProductosService, private route: ActivatedRoute) {

    this.route.queryParams
      .subscribe((params: any) => {
        console.log(params);
        this.nombreProducto = params.nombre
      });

    this.producto = this.servicio_productos.listProductos();

    for (let index = 0; index < this.producto.length; index++) {

      const producto = this.producto[index].nombre;

      if (this.nombreProducto === producto) {
        console.log("Aca viene el producto ", this.producto[index])
        this.detalleProducto.push(this.producto[index])
      }
    }
    console.log(this.detalleProducto)
  }
}
