import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ShopState } from './shop/store/shop.state';
import { AdminState } from './admin/store/admin.state';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AuthState } from './auth/store/auth.state';
import { AgGridModule } from 'ag-grid-angular';
import { AuthorInfoComponent } from './author-info/author-info.component';
import { AboutComponent } from './about/about.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { ExpressSessionInterceptor } from './interceptors/express-session.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthorInfoComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    NgxsModule.forRoot([ShopState, AdminState, AuthState], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production }),
    ReactiveFormsModule,
    FormlyMaterialModule,
    FlexLayoutModule,
    NgxPermissionsModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    AgGridModule.forRoot(),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ExpressSessionInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
