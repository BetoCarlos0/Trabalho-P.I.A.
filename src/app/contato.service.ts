import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Contato } from "./contato";

@Injectable()
export class ContatoService {

  constructor( public httpClient : HttpClient) { 

  }

  getContatosAPI(){
    return this.httpClient.get<Contato[]>('https://pacific-harbor-95140.herokuapp.com/');
  }

}
