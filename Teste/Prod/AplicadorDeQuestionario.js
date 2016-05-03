"use strict";

class AplicadorDeQuestionario{

    constructor(){
        this.questaoSendoAplicada = 0;
    }

    iniciarAplicacao(questionario){
        this.questionario = questionario;
        this.questaoSendoAplicada = 1; 
    }
    
    questaoAtual(){
        return this.questaoSendoAplicada;
    }
}

module.exports = AplicadorDeQuestionario;


