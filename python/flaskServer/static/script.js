let result = document.getElementById("result");
let submit = document.getElementById("submit");

submit.addEventListener('click', function(){
    calculo();
});

function calculo() {
    let calc = document.getElementById("calc").value;
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    fetch(`http://m8.localhost/${calc}/${num1}/${num2}`)
    .then(response => response.json())
    .then(data => {
        result.innerText = `Resultado de ${calc} ${num1} y ${num2} es: ${data.resultat}`;
    })
    .catch(error => console.error(error));
}