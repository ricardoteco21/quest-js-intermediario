const inputText = document.querySelectorAll(".dados");
const botao = document.getElementById("btnEnviar");
const aviso = document.querySelectorAll(".campoOb");

botao.addEventListener('click', () => {
    inputText.forEach((elemento, index) => {

        if (elemento.value === "") {
            elemento.classList.remove('campo-preenchido');
            elemento.classList.add('campo-nao-preenchido');
            aviso[index].classList.add("mostrar");        
           
        } else {
            elemento.classList.remove('campo-nao-preenchido');
            elemento.classList.add('campo-preenchido');
            aviso[index].classList.remove("mostrar");
        }
    });
});

