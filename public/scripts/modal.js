export default function Modal(){
    
    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')
    cancelButton.addEventListener("click", close)
    
    function open(){
    //funcionalidade de atribuir a classe active p/ modal abrir
    modalWrapper.classList.add("active")//adicionando uma classe
    }
    function close(){
     //funcionalidade de excluir a classe active p/ modal
     modalWrapper.classList.remove("active")//removendo uma classe
    }

    return {
        open,
        close
    }
}