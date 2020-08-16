//Procurar o botão ->              quando clicar no botão -> 
document.querySelector("#add-time").addEventListener('click', cloneField)

function createDeleteDiv() {
    const deleteDiv = document.createElement("div")
    deleteDiv.className = "delete"
    
    const deleteButton = document.createElement("button")
    deleteButton.addEventListener("click", deleteSchedule)
    deleteDiv.appendChild(deleteButton)
    const deleteIcon = document.createElement("i")
    deleteIcon.className = "fa fa-trash"
    deleteButton.appendChild(deleteIcon)

    return deleteDiv
}

function deleteSchedule(e) {
    const deletedSchedule = e.target.parentNode.parentNode;
    document.querySelector("#schedule-items").removeChild(deletedSchedule)
}

//executar uma ação  ->        duplicar os campos (.schedule-item) -> true (pega os filhos tb) 
function cloneField() {
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    newFieldContainer.appendChild(createDeleteDiv())

    //antes de colocar na página -> limprar os campos (input: fields [0] e [1])
    const fields = newFieldContainer.querySelectorAll('input') 
    
    fields.forEach(function(field) {
        field.value = ""
    })
    

    //colocar na página (onde?) -> #schedule-items
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}

