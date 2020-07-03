import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './contato/contato.component';
import { RouterModule } from '@angular/router';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    QuemSomosComponent,
    ProdutosComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'contato', component: ContatoComponent},
      {path: 'produtos', component: ProdutosComponent},
      {path: '', component: ProdutosComponent},
      {path: 'quem-somos', component: QuemSomosComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
