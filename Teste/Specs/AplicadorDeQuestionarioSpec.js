var AplicadorDeQuestionario = require('../Prod/AplicadorDeQuestionario.js');

describe('Aplicador de questionario', function(){
    var aplicador = new AplicadorDeQuestionario(); 

    it('Deve iniciar aplicacao do questionario selecionado', function(){
        var questionario = {};
        aplicador.iniciarAplicacao(questionario);    
        expect(aplicador.questaoAtual()).toBe(1);
    });

    it('Deve permitir responder questao', function(){
        expect(aplicador.questaoAtual().resposta)))    
    });


    it('Deve ir para proxima questao quando a questao atual estiver respondida');

    it('Deve permitir retornar em questoes ja respondidas');

    it('Deve permitir pausar aplicacao do questionario');

    it('Deve continuar aplicacao de questionario do ponto onde foi pausado');

    it('Deve finalizar aplicacao de questionario');

    it('Deve armazenar as respostas do questionario selecionado');

//Pendencias de dúvidas a serem retiradas
    it('Ao finalizar questionario não permitir que seja editado');
    
});
