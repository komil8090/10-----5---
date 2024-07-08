let input = document.querySelector("input");
let buuton = document.querySelector("button");
let ul = document.querySelector("ul");

buuton.addEventListener("click", function (event) {
    event.preventDefault();

    let task = input.value;
    let li = document.createElement("li");

    li.textContent = task;

    ul.appendChild(li);

    input.value = "";
});