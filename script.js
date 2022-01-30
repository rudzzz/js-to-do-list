// pegando o valor do input (tarefa)
const inputElement = document.querySelector('input');

// pegando o botão de adicionar tarefa
const btnAddElement = document.querySelector('form button');

// pegando o elemento HTML <ul>
const ulElement = document.querySelector('ul');

// função que realiza toda a lógica da tela
btnAddElement.onclick = ev => {
    // remove o comportamento padrão do elemento.
    ev.preventDefault();

    // verificação de valor do campo input
    if(inputElement.value){

        // cria um botão
        const btnRemoveElement = document.createElement('button');
        // Adiciona um texto ao botão criado
        btnRemoveElement.innerHTML = "Remover";
        
        // cria um <li> 
        const liElement = document.createElement("li");
        console.log(liElement);
        // adiciona o valor do input no elemento <li> criado
        liElement.innerHTML = `<span>${inputElement.value}</span>`;

        // adiciona o botao de remover dentro do <li>
        liElement.appendChild(btnRemoveElement);

        // adiciona dentro do elemento <ul> um <li>
        ulElement.appendChild(liElement);

        // remove a tarefa
        btnRemoveElement.onclick = () => {
            ulElement.removeChild(liElement);
        }

        // limpa o valor no input
        inputElement.value = null;
    }
    else{
        // se não existir valor, irá retonar esta mensagem ao usuário
        alert("Digite um valor para ser adicionado!");
    }
}