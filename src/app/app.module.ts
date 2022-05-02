import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { EnterPriseComponent } from './pages/enter-prise/enter-prise.component';
import { AddEnterpriseComponent } from './pages/enter-prise/add-enterprise/add-enterprise.component';
import { BrowserModule } from '@angular/platform-browser';
import { EditEnterpriseComponent } from './pages/enter-prise/edit-enterprise/edit-enterprise.component';
import { EnterpriseCashComponent } from './pages/enterprise-cash/enterprise-cash.component';
import { MunicipyComponent } from './pages/municipy/municipy.component';
import { EditarEmpresaComponent } from './pages/enter-prise/editar-empresa/editar-empresa.component';
import { AddRegisterComponent } from './pages/register/add-register/add-register.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    EnterPriseComponent,
    AddEnterpriseComponent,
    EditEnterpriseComponent,
    EnterpriseCashComponent,
    MunicipyComponent,
    EditarEmpresaComponent,
    AddRegisterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
