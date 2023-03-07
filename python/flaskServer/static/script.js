let calc = document.getElementById("calc").value;
let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;
let result = document.getElementById("result");
let submit = document.getElementById("submit");

submit.addEventListener('click', function(){
    calculo(calc, num1, num2);
});
function calculo(calc, num1, num2) {
    fetch(`http://m8.localhost/${calc}/${num1}/${num2}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    /*.then(response => {
            if (response.ok) {
                
            } else {
                console.error(`Error al eliminar hacer la ${calc}: ${response.statusText}`);
            }
        })
        .catch(error => console.error(error));*/
}