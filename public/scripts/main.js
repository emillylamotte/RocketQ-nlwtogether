import Modal from './modal.js'

const modal = Modal()
/*Mapeando os elementos para abrir a modal correta (excluir/marcar como lido) */
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//Pegar todos os botões que existem da classe check
const checkButtons = document.querySelectorAll(".actions a.check")
//Adicionar quando o click acontece
checkButtons.forEach(button =>{
    //adicionar a escuta
    button.addEventListener("click", handleClick)
})

//Quando o botão delete é pressionado abre a modal
const deleteButtons = document.querySelectorAll(".actions a.delete")
//Adicionar quando o click acontece
deleteButtons.forEach(button =>{
    //adicionar a escuta
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true){
    event.preventDefault()

    /*Mapeando formulário para enviar as informações da pergunta para o actions */
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)
    
    /*abrir a modal correta
    check padrão verdadeiro é marcar como lido, quando o delete é clicado ele passa pra false
    var ? se for verdadeiro faz 1 : se for falso faz 2*/
    modalTitle.innerHTML= check ? "Marcar essa pergunta como lida" : "Excluir pergunta"
    modalDescription.innerHTML= check ? "Tem certeza que deseja marcar como lida?" : "Tem certeza que deseja excluir essa pergunta?"
    modalButton.innerHTML= check ? "Sim, marcar como lida" : "Sim, excluir"
    //Trocando a cor do botão
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
    modal.open()

}