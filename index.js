const form = document.querySelector('#form');
const content = document.querySelector('#content');

const list = []

form.addEventListener('submit', createList)

function renderList() {
    if (list.length === 0) {
        content.innerHTML = '<p class="empty">Добавьте покупку:</p>'
     } else {
         let html = ''
     for (let i=0; i < list.length; i++) {
         const listSum = list[i]
        html += toCard (listSum)
     }
     content.innerHTML = html;
     }
}

function toCard (list) {

    return `
    <form id="formList">
    <label>
    <input type="checkbox" id="checkbox" class="custom-checkbox"><span class="textChecked">${list.title}</span>
    <button type="reset" id="delete">-</button>
    </label>
    </form>
   `
}

function isInvalid(title) {
    return !title.value
}

function createList(event) {

    event.preventDefault()


    if (isInvalid(title)) {
        return
    }

    const newList = {
        title: title.value
    }

    list.push(newList)
    title.value = ''

    renderList()
}

// const del = document.querySelector('#delete');
// del.addEventListener('click', delList);
// const formL = document.querySelector('#formList');

// function delList(list) {
//     let checkboxs = document.querySelectorAll("input[type='checkbox']:checked")
//     checkboxs.forEach(checkbox => checkbox.parentElement.remove())
//     return !title.value
// }

renderList()