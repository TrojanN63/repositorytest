export class Filme{
    private _titulo : string;
    private _diretor : string;
    private _anoLancamento : number;
    private _avaliacoes : number[] = []

    constructor(titulo : string,diretor:string,anoLancamento:number,avaliacoes:number[]){
        this._titulo = titulo;
        this._diretor = diretor;
        this._anoLancamento = anoLancamento;
        this._avaliacoes = avaliacoes;
    }

    get titulo() : string{
        return this._titulo;
    }
    get diretor() : string{
        return this._diretor;
    }
    get anoLancamento() : number{
        return this._anoLancamento;
    }

    set titulo(new_titulo : string){
        this._titulo = new_titulo;
    }
    set diretor(new_diretor : string){
        this._diretor = new_diretor;
    }
    set anoLancamento(new_ano : number){
        this._anoLancamento = new_ano;
    }

    adicionarAvaliacao(avaliacao : number) : void{
        if (avaliacao <= 5){
            if (avaliacao >= 1){
                this._avaliacoes.push(avaliacao);
            }
        }
    }
    calcularMediaAvaliacoes() : number{
        let n = 0
        let a = 0
        this._avaliacoes.forEach(av => {
            n++
            a+=av
        });
        return(a/n)
    }
}