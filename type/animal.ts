class Animal {
    nome: string;

    constructor(nome: string){
        this.nome= nome
    }

    emitirSom() : void {
        console.log("Som do animal")
    }
    public mover(distância: number):void{
        console.log(`${this.nome} mouveu-se ${distância} metros.`)
    }
}

class Cachorro extends Animal {
    constructor(nome: string){
        super(nome)
    }
    emitirSom(): void {
        console.log('au au au au au au au')
    }
    pegar(objeto : string): void {
        console.log(`${this.nome} pegou ${objeto}`)
    }
}

class Gato extends Animal {
    constructor(nome : string){
        super(nome)
    }
    emitirSom(): void {
        console.log("MIAU SEU MERDA")
    }
}

let animal : Animal = new Animal('Ornitorrinco');
animal.emitirSom()
animal.mover(10)

let doggg = new Cachorro('doggy')
doggg.emitirSom()
doggg.mover(0.666666666666667)
doggg.pegar("leite")

let animais : Animal[] = [new Animal("porra"), new Cachorro("filho da puta"), new Gato("paçoquinha")]
animais.forEach(animal => {
    console.log(animal.nome)
    animal.emitirSom()
})