const input = document.querySelector('#add-item');
const btnAdd = document.querySelector('.add');
const items = document.querySelector('.items');
let countId = 0;


function addNewTask() {
    let inputValue = input.value;

    if (inputValue !== undefined && inputValue !== null && inputValue !== "") {
        ++countId;

        let newItem = `<div id="${countId}" class="item">
        <div class="item-text" onclick="checkTask(${countId})">
            <div class="item-check">
                <span id="icon_${countId}" class="material-symbols-outlined">
                    radio_button_unchecked
                    </span>
            </div>
            <div onclick="checkTask(${countId})" class="item-name">
                ${inputValue}
            </div>
        </div>
        <button onclick="deleteItem(${countId})" class="delete">
            <span class="material-symbols-outlined">
                delete
                </span>
        </button>
    </div>`
    

    items.innerHTML += newItem;

    input.value = "";
    input.focus();
    }
}

function deleteItem(countId) {
    let task = document.getElementById(countId);
    task.remove();
}

function checkTask(countId) {
    let item = document.getElementById(countId);
    let classe = item.getAttribute("class");

    if (classe == "item") {
        item.classList.add("cliked");

        let icon = document.getElementById("icon_" + countId);
        icon.innerText = "check_circle";

        item.parentNode.appendChild(item);
    } else {
        item.classList.remove("cliked");

        let icon = document.getElementById("icon_" + countId);
        icon.innerText = "radio_button_unchecked";
    }
}

input.addEventListener("keyup", function (e) {
    if (e.key == "Enter") {
        e.preventDefault();
        btnAdd.click();
    }
})