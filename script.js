function adicionarTarefa() {
    const campoTarefa = document.getElementById("tarefa");
    const listaTarefas = document.getElementById("listaTarefas");

    if (campoTarefa.value === "") {
        alert("Digite uma tarefa.");
        return;
    }

    const novaTarefa = document.createElement("li");
    novaTarefa.textContent = campoTarefa.value;

    listaTarefas.appendChild(novaTarefa);

    campoTarefa.value = "";
}