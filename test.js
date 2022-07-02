const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be 106.5833 yenes", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(100)).toBe(10658.333333333336); //1 dolar son 106.5833 yenes, entonces 100 dolares deberian ser = ((100 / 1.2) * 127.9)
})

test("One yen should be 0.006254 pounds", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(100)).toBe(0.6254886630179828); //1 yen son 0.006254 pounds, entonces 100 yenes deberian ser = ((100 / 129.7) *0.8)
})