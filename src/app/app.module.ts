import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule} from '@angular/router';
import { ProductModule } from './products/product.module';
import { IntroComponent } from './intro/intro.component';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from './shared/shared.module';
import { NgbdModalBasic } from './cart/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    IntroComponent,
    CartComponent,
    NgbdModalBasic
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'intro', component: IntroComponent },
      { path: 'cart', component: CartComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ], {useHash: true}),
    ProductModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
