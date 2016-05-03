var Questao = require("../Prod/Questao.js");

describe("Questao", function(){

    var questao;

    beforeEach(function(){
        questao = new Questao();
    });

    it("Deve adicionar indice", function(){
        questao.adicionarIndice(3);
        expect(questao.indiceAtual()).toBe(3);
    });
   
    it("Deve rejeitar indice negativo", function(){
        questao.adicionarIndice(-2);
        expect(questao.indiceAtual()).toBe(0);

    });

    //V ou F
    //Descritiva
    //Objetiva
    //Numerica
    //Range
   
});
