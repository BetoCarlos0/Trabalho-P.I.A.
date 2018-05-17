import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ListapostosComponent } from './listapostos/listapostos.component';
import { PostodetalheComponent } from './postodetalhe/postodetalhe.component';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { PostoService } from "./posto.service";
import { ListaContatosComponent } from './lista-contatos/lista-contatos.component';
import { ContatoService } from "./contato.service";
import { FormCadastroPostoComponent } from './form-cadastro-posto/form-cadastro-posto.component';
import { FormsModule } from '@angular/forms';

export const APP_ROTAS : Routes = [
{path : '', component : HomeComponent},
{path : 'lista', component : ListapostosComponent},
{path : 'contatos', component : ListaContatosComponent},
{path : 'novo', component : FormCadastroPostoComponent},
{path : 'sobre', component : SobreComponent}
]; 


@NgModule({
  declarations: [
    AppComponent,
    ListapostosComponent,
    PostodetalheComponent,
    SobreComponent,
    HomeComponent,
    ListaContatosComponent,
    FormCadastroPostoComponent
  ],
  imports: [
     BrowserModule,
    RouterModule.forRoot( APP_ROTAS ),
    HttpClientModule,
    FormsModule
  ],
  providers: [PostoService, ContatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
