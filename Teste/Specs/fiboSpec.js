var Fibo = require("../Prod/fibo.js");

describe("Sequência Fibonacci", function() {
  it("Deve ser 0 quando parâmetro for 0", function() {
        var fibo = new Fibo();
        expect(fibo.resultadoDe(0)).toBe(0);
  });

 it("Deve ser 1 quando parâmetro for 1", function() {
        var fibo = new Fibo();
        expect(fibo.resultadoDe(1)).toBe(1);
  });

 it("Deve ser 1 quando parâmetro for 2", function() {
        var fibo = new Fibo();
        expect(fibo.resultadoDe(2)).toBe(1);
  });

 it("Deve ser 2 quando parâmetro for 3", function() {
        var fibo = new Fibo();
        expect(fibo.resultadoDe(3)).toBe(2);
  });

 it("Deve ser 3 quando parâmetro for 4", function() {
        var fibo = new Fibo();
        expect(fibo.resultadoDe(4)).toBe(3);
  });

 it("Deve ser 5 quando parâmetro for 5", function() {
        var fibo = new Fibo();
        expect(fibo.resultadoDe(5)).toBe(5);
  });


});


