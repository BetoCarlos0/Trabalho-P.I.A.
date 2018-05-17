export class Posto {

    public id : number;
    public nome : string;
    public numero : number;
    public bairro : string;
    public cidade : string;
    public cep : string;
    public funcionamento : string;
    public horario : string;
    public telefone : string;
    public nota : string;

    constructor( pid : number, pnome : string, pnumero : number, pbairro : string, pcidade : string, pcep : string, pfuncionamento : string, phorario : string, ptelefone : string, pnota : string){
        this.id = pid;
        this.nome = pnome;
        this.numero = pnumero;
        this.bairro = pbairro;
        this.cidade = pcidade;
        this.cep = pcep;
        this.funcionamento = pfuncionamento;
        this.horario = phorario;
        this.telefone = ptelefone;
        this.nota = pnota;
    }
}
