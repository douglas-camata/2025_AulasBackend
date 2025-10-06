function areaTriangulo (base, altura) {
    let area = (base * altura) / 2;
    return area;
}

let base = 5;
let altura = 10;
let area = areaTriangulo (base, altura);
console.log(`A área do triângulo de base ${base} e altura ${altura} é ${area}`);
