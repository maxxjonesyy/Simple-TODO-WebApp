"use strict";

const list = document.querySelector(".list");
const submit = document.querySelector(".button");
const textBox = document.querySelector(".textbox");

// function for the creation and appending of elements from the input
const printInput = function() {
    const listItem = document.createElement("li");
    listItem.classList.add("liststyle", "list", "liststyle-decoration");
    listItem.innerText = textBox.value;
    list.appendChild(listItem);
    textBox.value = "";
};

// Allows the 'add' button to submit 'todo' tasks
submit.addEventListener("click", function() {
    printInput();
});

// Allows the enter key to submit 'todo' tasks and stops the page from reloading
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        printInput();
        event.preventDefault();
    }
});