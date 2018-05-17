import { Component, OnInit } from '@angular/core';
import { Posto } from "../posto";
import { PostoService } from "../posto.service";

@Component({
  selector: 'app-form-cadastro-posto',
  templateUrl: './form-cadastro-posto.component.html',
  styleUrls: ['./form-cadastro-posto.component.css']
})
export class FormCadastroPostoComponent implements OnInit {

  posto : Posto = new Posto(0, '', 0, '', '', '', '', '', '', '');
  
  constructor(public postoService : PostoService) { }

  ngOnInit() {
  }

  cadastrarPosto(){
    this.postoService.cadastrarPostoAPI(this.posto)
        .subscribe( resposta => alert('Cadastro realiado com sucesso!'));
  }

}
