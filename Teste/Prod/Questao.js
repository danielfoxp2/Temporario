"use strict";

class Questao{
    
    constructor(descricao){
        this.indice = 0;
    }

    adicionarIndice(indice){
        if(indice > 0)
           this.indice = indice;
    }

    indiceAtual(){
        return this.indice;
    }

        
}

module.exports = Questao;
