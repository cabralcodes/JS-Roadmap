  // Variáveis
const button = document.querySelectorAll(".btn");
let conta = "";
let Visor = document.getElementById("tela");
Visor.innerText = conta;
button.forEach(function(botoes){
    botoes.addEventListener("click", function(){
        console.log(this.value)
        if(this.value === "="){
            console.log(conta);
            Visor.innerText = eval(conta);
            //conta = Visor.innerText;
            console.log(Visor);
        } 
        else if(this.value === "del") {
            conta = "";
            Visor.innerText = conta;
        }
    
        else {
            conta+=  this.value;
            Visor.innerText = conta;
            Visor.innerText = conta.replace("*", "x");
        }
    })
});
