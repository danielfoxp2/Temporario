//var Questionario = require('../Prod/Questionario.js');
var Questionario = require('../Prod/QuestionarioES6.js');

describe("Questionario", function() {

var questionario;

beforeEach(function(){
    questionario = new Questionario();
});

it("Deve adicionar questao", function() {
	var stubQuestao = {};
    questao.adicionarIndice = function adicionarIndice(indice){
        this.indice = indice;
    };

	questionario.Adicionar(questao);
    expect(questionario.totalDeQuestoesExistentes()).toBe(1);
});

it("Deve nao permitir questao nula", function() {
    var questao01 = {};
    questionario.Adicionar(questao01);
	questionario.Adicionar();

    var questao02 = {};
    questionario.Adicionar(questao02);

    expect(questionario.totalDeQuestoesExistentes()).toBe(2);
});

it("Deve adicionar mais de uma questao", function() {
	var questao01 = {};
	var questao02 = {};

	questionario.Adicionar(questao01);
	questionario.Adicionar(questao02);

	expect(questionario.totalDeQuestoesExistentes()).toBe(2);
  });

  it("Deve atualizar o indice das questões do questionario", function() {
      function Questao(){
      };

      Questao.prototype.adicionarIndice = function(indice){
      };

      var questao1 = new Questao();
      var questao2 = new Questao();
      questionario.Adicionar(questao1);
      questionario.Adicionar(questao2);

      expect(questionario.indiceDaProximaQuestao()).toBe(3);
  });
});























