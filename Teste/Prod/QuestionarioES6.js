"use strict";

class Questionario {

    constructor(){
        this.questoes = [];
    }

    Adicionar(questao) {
        if(!!questao){
            questao.adicionarIndice(this.indiceDaProximaQuestao());
            this.questoes.push(questao);
        }
    }

    indiceDaProximaQuestao() {
        return this.totalDeQuestoesExistentes() + 1; //=[ this magic number
    }

    totalDeQuestoesExistentes(){
        return this.questoes.length;
    }

    //should change the name to apresentarQuestoes or something like it
    questoes(){
        return this.questoes;
    }
}

module.exports = Questionario;
