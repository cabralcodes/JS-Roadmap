  // Variáveis
const button = document.querySelectorAll(".btn");
let conta = "";
let Visor = document.getElementById("tela");
Visor.innerText = conta;
// button.forEach(function(botoes){
//     botoes.addEventListener("click", function(){
//         console.log(this.value)
//         if(this.value === "="){
//             console.log(conta);
//             Visor.innerText = eval(conta);
//             //conta = Visor.innerText;
//             console.log(Visor);
//         } 
//         else if(this.value === "del") {
//             conta = "";
//             Visor.innerText = conta;
//         }
    
//         else {
//             conta+=  this.value;
//             Visor.innerText = conta;
//             Visor.innerText = conta.replace("*", "x");
//         }
//     })
//});

function calc() {
    console.log(this.value);

    if (this.value === "=") {
        if (conta === "") {
            return Visor.innerText = "Error";
        }

        if (
            conta.endsWith("+") ||
            conta.endsWith("-") ||
            conta.endsWith("/") ||
            conta.endsWith("*")
        ) {
            Visor.innerText = "Error";
            return;
        }

        let contaPorcentagem = conta.replaceAll("%", "/100");

        Visor.innerText = eval(contaPorcentagem);
        conta = Visor.innerText;
    } 
    else if (this.value === "del") {
        conta = "";
        Visor.innerText = conta;
    } 
    else if (this.value === "apg") {
        conta = conta.slice(0, -1);
        Visor.innerText = conta;
    } 
    else {
        conta += this.value;
        Visor.innerText = conta.replaceAll("*", "x").replaceAll("/", ":");
    }
}
button.forEach(function(botoes){
    botoes.addEventListener("click", calc);
})
