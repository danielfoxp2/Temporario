function Questionario(){
 this.questoes = [];   
}

Questionario.prototype.Adicionar = function(questao){
   if(!!questao){
       questao.adicionarIndice(this.indiceDaProximaQuestao());
       this.questoes.push(questao);
   }
}

Questionario.prototype.indiceDaProximaQuestao = function(){
    return this.totalDeQuestoesExistentes() + 1;
}

Questionario.prototype.totalDeQuestoesExistentes = function(){
    return this.questoes.length;
} 

Questionario.prototype.questoes = function(){
    return this.questoes;
}

module.exports = Questionario;
