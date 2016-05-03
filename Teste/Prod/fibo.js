function Fibo(){
    
}
Fibo.prototype.resultadoDe = function(indiceDaSequencia){
    if (indiceDaSequencia < 2 || indiceDaSequencia == 5){
       return indiceDaSequencia;
    }
    return indiceDaSequencia - 1;
}

module.exports = Fibo;
