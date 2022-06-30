const button = document.getElementById("criar-tarefa")

function addTarefa() {
    const valueInput = document.getElementById("texto-tarefa");
    const list = document.getElementById("lista-tarefas")
    const createLis = document.createElement("li")
    const novaTarefa = valueInput.value
    createLis.innerHTML = novaTarefa
    list.appendChild(createLis)
    valueInput.value = ""
}

const valueInput = document.getElementById("texto-tarefa");
valueInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    addTarefa()
  }
});

button.addEventListener ("click", addTarefa)

const list = document.getElementById("lista-tarefas")
list.addEventListener("click", function(event) {
  const lis = document.getElementsByTagName("li")
 for (li of lis) {
   if (li.style.backgroundColor = "rgb(128, 128, 128)") {
    li.style.backgroundColor = "white"
   }
 }
  event.target.style.backgroundColor = "rgb(128, 128, 128)"
})

list.addEventListener("dblclick", (event) => {
  if (event.target.className === "completed") {
    event.target.classList.remove("completed")
  } else {
    event.target.className = "completed"
  }

})

const buttonClear = document.getElementById("apaga-tudo")
buttonClear.addEventListener("click", () => {
list.innerHTML =""
})