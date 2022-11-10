import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component'

import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { MatCardModule} from '@angular/material/card';


import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from  '@angular/forms';
import { ReactiveFormsModule } from  '@angular/forms';

import { MatFormFieldModule }  from '@angular/material/form-field';
import { MatInputModule }  from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { LoginComponent } from './pages/login/login.component';
import { MonitoracaoComponent } from './pages/monitoracao/monitoracao.component';
import { NotificacaoComponent } from './pages/notificacao/notificacao.component';

import { AuthService } from './service/auth.service';
import { MatIconModule } from '@angular/material/icon';
import { OrderModule } from 'ngx-order-pipe';
import { LocalDateTimePipe } from './pipe/local-date-time.pipe';
import { HistoricoComponent } from './pages/historico/historico.component';
import { InputComponent } from './shared/input/input.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,    

    LoginComponent, 
    MonitoracaoComponent, 
    NotificacaoComponent, LocalDateTimePipe, HistoricoComponent, InputComponent, 
 
    
  ],
  imports: [ 
 
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSnackBarModule,
    MatIconModule,  
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule, 
  
    OrderModule
    
  ],
  providers: [AuthService, AuthGuard, LocalDateTimePipe],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
