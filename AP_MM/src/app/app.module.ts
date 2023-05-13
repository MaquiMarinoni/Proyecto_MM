import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoapComponent } from './components/logoap/logoap.component';
import { FooterComponent } from './components/footer/footer.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { HysComponent } from './components/hys/hys.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { NgCircleProgressModule } from 'ng-circle-progress' ;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoapComponent,
    FooterComponent,
    AcercadeComponent,
    HysComponent,
    ExperienciaComponent,
    EducacionComponent,
    BannerComponent,
    ProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot ({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
