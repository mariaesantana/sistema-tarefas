function adicionarTarefa() {
    const campoTarefa = document.getElementById("tarefa");
    const listaTarefas = document.getElementById("listaTarefas");

    if (campoTarefa.value === "") {
        alert("Digite uma tarefa.");
        return;
    }

    const novaTarefa = document.createElement("li");

    const textoTarefa = document.createElement("span");
    textoTarefa.textContent = campoTarefa.value;

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";

    botaoRemover.onclick = function () {
        novaTarefa.remove();
    };

    novaTarefa.appendChild(textoTarefa);
    novaTarefa.appendChild(botaoRemover);

    listaTarefas.appendChild(novaTarefa);

    campoTarefa.value = "";
}