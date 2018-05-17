import { Component, OnInit } from '@angular/core';
import { PostoService } from "../posto.service";
import { Posto } from "../posto";

@Component({
  selector: 'app-listapostos',
  templateUrl: './listapostos.component.html',
  styleUrls: ['./listapostos.component.css']
})
export class ListapostosComponent implements OnInit {

  postos : Posto[];

  constructor( private postoService : PostoService) {

    this.postoService.getPostosAPI()
        .subscribe(
           resposta => this.postos = resposta
        );
  }

  ngOnInit() {
  }

}
