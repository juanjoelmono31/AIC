import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: any;

  constructor() { }

  listProductos() {
    
  this.productos = [{
    nombre: 'Equipo de presion constante',
    descripcion: 'Somos líderes en el suministro e instalación de equipos de presión constante para sistemas de agua potable, garantizando un flujo uniforme y fiable, esencial para aplicaciones residenciales, agrícolas e industriales. Nuestras bombas de presión constante se destacan por su capacidad de mantener una presión estable en la red de suministro, independientemente de las variaciones en el caudal o la demanda, lo que resulta en un servicio más eficiente y un ahorro significativo de energía.',
    descripcion2: 'Además, ofrecemos una amplia gama de bombas para diferentes tipos de fluidos, adecuadas para las exigentes condiciones de la industria y la construcción. Desde bombas centrífugas, bombas sumergibles hasta bombas de desplazamiento positivo, nuestras soluciones en bombeo aseguran el rendimiento óptimo y la durabilidad en cualquier entorno operativo. Representamos a marcas de renombre internacional como Barnes de Colombia, Pedrollo, Pearl, Tsurumi, Franklin, entre otras, lo que nos permite ofrecer productos de la más alta calidad y tecnología avanzada. Nuestro compromiso con la excelencia se refleja en nuestro equipo de profesionales altamente capacitados, quienes están dedicados a proporcionar un servicio profesional, eficaz y amable, asegurando la satisfacción total del cliente.',
    imgPrincipal: '../assets/img/Presion-constante.jpeg',
    imgs: [

      '../assets/img/constante1.png',
      '../assets/img/constante2.png',
      '../assets/img/constante3.png',
      '../assets/img/constante4.png',
    ]
  },
  {
    nombre: 'Plantas electricas',
    descripcion: 'En nuestra compañía, nos enorgullecemos de ser importadores líderes de plantas eléctricas diésel y gasolina, ofreciendo soluciones energéticas robustas y confiables para una variedad de aplicaciones. Nuestros generadores están equipados con motores de alta calidad y alternadores altamente eficientes, garantizando un rendimiento excepcional y una larga vida útil.',
    descripcion2: 'Nuestra selección de generadores abarca una amplia gama de capacidades, desde unidades compactas de 5 kVA ideales para uso residencial o pequeñas empresas, hasta potentes generadores de 1500 KVA capaces de satisfacer las demandas energéticas de grandes instalaciones industriales y proyectos de construcción. Nos asociamos con fabricantes de renombre mundial para ofrecer plantas eléctricas que no solo cumplen, sino que superan las expectativas de nuestros clientes en términos de fiabilidad, eficiencia y sostenibilidad. Con una profunda comprensión de las necesidades del mercado y un compromiso con la innovación, proporcionamos soluciones energéticas que impulsan el progreso y apoyan el crecimiento sostenible.',
    imgPrincipal: '../assets/img/Planta1.png',
    imgs: [

      '../assets/img/planta 1.png',
      '../assets/img/planta 2.png',
      '../assets/img/planta5.png',
      '../assets/img/planta7.png'
    ]
  },
  {
    nombre: 'Equipos contraincendios UL/FM',
    descripcion: 'Nos destacamos como representantes autorizados de las mejores marcas de bombas contra incendios, certificadas bajo la normativa NFPA 20, garantizando equipos que cumplen con los más altos estándares internacionales de seguridad y tecnología. Nuestra gama de productos incluye bombas de reconocidas marcas, y cumplimiento con las certificaciones UL y FM.',
    descripcion2: 'Ofrecemos soluciones integrales en sistemas de protección contra incendios, desde la consultoría y diseño hasta la instalación y mantenimiento, cubriendo todo el territorio colombiano. Nuestro equipo técnico está compuesto por especialistas altamente capacitados, listos para brindar asesoramiento experto y personalizado, asegurando que cada sistema se adapte a las necesidades específicas de nuestros clientes y cumpla con todas las regulaciones nacionales pertinentes. ',
    imgPrincipal: '../assets/img/suction_diesel.jpg',
    imgs: [

      '../assets/img/contraincendios1.jpg',
      '../assets/img/contraincendios2.jpg',
      '../assets/img/contraincendios3.png',
      '../assets/img/contraincendios4.png'
    ]
  },
  {
    nombre: 'Diseño e instalación de redes contraincendios',
    descripcion: 'En nuestra empresa, nos especializamos en la instalación de sistemas de protección contra incendios, asegurando la seguridad y el cumplimiento de las normativas vigentes. Nuestros servicios incluyen la implementación de redes contra incendios diseñadas según el Reglamento de Instalaciones de Protección Contra Incendios (RIPCI) y la NFPA 20, Este reglamento es esencial para garantizar que todos los componentes y procedimientos de nuestras instalaciones sean eficaces y estén en línea con las exigencias legales más recientes. ',
    descripcion2: 'Nuestro equipo de profesionales está altamente cualificado y posee la formación requerida para llevar a cabo la instalación y el mantenimiento de estos sistemas, proporcionando así un entorno seguro tanto para propiedades como para personas.',
    imgPrincipal: '../assets/img/bomba-carcasa-partida-motor-diesel.jpg',
    imgs: [

      '../assets/img/redes1.png',
      '../assets/img/redes2.png',
      '../assets/img/redes3.png',
      '../assets/img/redes4.png'
    ]
  },
  {
    nombre: 'Equipos de construción',
    descripcion: 'En nuestra empresa, ofrecemos una extensa gama de equipos de construcción de vanguardia, diseñados para cumplir con los más altos estándares de eficiencia, seguridad y calidad en cualquier proyecto. Nuestro catálogo incluye desde maquinaria pesada para grandes movimientos de tierra y obras de ingeniería civil, hasta equipos más específicos para tareas precisas y delicadas.',
    descripcion2: 'Entendemos que cada proyecto de construcción es único, y por eso, nos aseguramos de que nuestros clientes obtengan la maquinaria adecuada para sus necesidades específicas, ayudando a mejorar la eficiencia y la calidad de la construcción. Nuestro equipo de expertos está siempre disponible para asesorar y garantizar que se elijan los equipos más adecuados para cada tarea.',
    imgPrincipal: '../assets/img/4_Epiroc-Mini.jpg',
    imgs: [

      '../assets/img/ligero1.png',
      '../assets/img/ligero2.png',
      '../assets/img/ligero3.png',
      '../assets/img/ligero4.png'
    ],
    imgs2: [

      '../assets/img/pesado1.png',
      '../assets/img/pesado3.png',
      '../assets/img/pesado2.png',
      '../assets/img/pesado4.png',
    ],
  },
]
  return this.productos
  }
}
