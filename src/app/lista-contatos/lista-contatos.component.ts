import { Component, OnInit } from '@angular/core';
import { Contato } from "../contato";
import { ContatoService } from "../contato.service";

@Component({
  selector: 'app-lista-contatos',
  templateUrl: './lista-contatos.component.html',
  styleUrls: ['./lista-contatos.component.css']
})
export class ListaContatosComponent implements OnInit {

  contatos : Contato[];

  constructor( public contatoService : ContatoService) { 
    this.contatoService.getContatosAPI()
        .subscribe( resposta => this.contatos = resposta);
  }

  ngOnInit() {
  }

}
