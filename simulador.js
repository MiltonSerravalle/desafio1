let escribeNumero = prompt("ingrese si para cargar notas");

const notas = (a, b, c) => {
    let totalNotas = a + b + c;
    let promedioNotas = totalNotas/3;
    return promedioNotas;
}

while(escribeNumero ==="si" || escribeNumero ==="Si" || escribeNumero === "SI"){
    alert("A continuacion ingrese las notas de los 3 trimestres");
    let notaA = parseint(prompt("Ingrese la primer nota del trimestre"));
    let notaB = parseint(prompt("Ingrese la segunda nota del trimestre"));
    let notaC = parseint(prompt("ingrese la tercer nota del trimestre"));
    let promedio = notas(notaA, notaB, notaC);
    alert(`el promedio de las notas ingresadas es igual a ${promedio}`);
    escribeNumero = prompt("ingrese si para cargar notas");
}
