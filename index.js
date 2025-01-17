let input = document.querySelector("input");
let buuton = document.querySelector("button");
let ul = document.querySelector("ul");

buuton.addEventListener("click", function (event) {
    event.preventDefault();

    let task = input.value;
    let li = document.createElement("li");
    let span = document.createElement("span");
    let doneBtn = document.createElement("button");
    let delBtn = document.createElement("button");

    doneBtn.addEventListener("click", function (event){
        event.preventDefault();

        span.classList.toggle("strike")
    })

    delBtn.addEventListener("click", function (event) {
        event.preventDefault()

        li.remove();
    })

    span.textContent = task;
    doneBtn.textContent = "Done";
    delBtn.textContent = "Delete";
    
    li.appendChild(span);
    li.appendChild(doneBtn);
    li.appendChild(delBtn);

    ul.appendChild(li);

    input.value = "";
});