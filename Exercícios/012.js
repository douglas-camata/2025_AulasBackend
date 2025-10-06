function valorPI() {
    return 3.14159;
}

function areaCircunferencia(raio) {
    let pi = valorPI();
    let area = pi * (2 * raio);
    console.log(`A área da circunferência de raio ${raio} é ${area}`);
}

areaCircunferencia(10);