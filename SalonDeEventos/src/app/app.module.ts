import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HeadersComponent } from './headers/headers.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { ReservaComponent } from './reserva/reserva.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';


const routes: Routes = [
  { path: '', redirectTo: '/header', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'signup', component: RegistroUsuariosComponent },
  { path: 'reserva', component: ReservaComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HeadersComponent,
    FooterComponent,
    SliderComponent,
    RegistroUsuariosComponent,
    ReservaComponent,
    CotizacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
