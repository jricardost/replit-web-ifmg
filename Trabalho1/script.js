function togglePageBackground() {
    var body = document.getElementById("pageBody");
    body.style.background = ("rgb(" + Math.round(Math.random() * 192) + "," + Math.round(Math.random() * 192) + "," + Math.round(Math.random() * 192) + ")");
}


function addToList() {

    var textInput = document.getElementById("itemToList");

    if (textInput.value == "") {
        alert("O conteúdo do item não pode ser vazio!");
        return;
    }

    var item = document.createElement("li");
    item.setAttribute("class", "list-group-item");
    item.innerText = textInput.value;
    document.getElementById("list").appendChild(item);
    textInput.value = "";
}

function toggleText() {

    var text = document.getElementById("textToToggle");
    var button = document.getElementById("btnToggleText");

    if (text.style.display != "none") {
        text.style.display = "none";
        button.innerText = "Mostrar Texto";
    } else {
        text.style.display = "block";
        button.innerText = "Ocultar Texto";
    }
}


function counter() {
    var button = document.getElementById("btnCounter");
    button.innerText = parseInt(button.innerText) + 1;
}


function toggleLamp() {
    document.getElementById("lamp").classList.toggle("lamp-on");
}