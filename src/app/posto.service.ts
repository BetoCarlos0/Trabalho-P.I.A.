import { Injectable } from '@angular/core';
import { Posto } from './posto';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PostoService {

  url : string = 'http://localhost:3000/postos';

  constructor( private httpClient : HttpClient) {
   }

   getPostosAPI(){
     return this.httpClient.get<Posto[]>(this.url);                
   }

   cadastrarPostoAPI( posto : Posto){
     
      let  httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json'
            })
      };

      return this.httpClient.post<Posto>(this.url, posto, httpOptions);

   }
}
