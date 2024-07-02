import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { EqpoPresionComponent } from './eqpo-presion/eqpo-presion.component';
import { DetallesComponent } from './detalles/detalles.component';
import { TratamientoDatosComponent } from './tratamiento-datos/tratamiento-datos.component';
import { ConstruccionComponent } from './construccion/construccion.component';


export const routes: Routes = [

    {path: '', component: InicioComponent},
    {path: 'quienes-somos', component: QuienesSomosComponent},
    {path: 'detalles', component: DetallesComponent},
    {path: 'tratamiento-datos', component: TratamientoDatosComponent},
    {path: 'construccion', component: ConstruccionComponent},
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }
