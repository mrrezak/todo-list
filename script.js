btn.addEventListener("click", btnClick);

function btnClick() {
    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    console.log(name);
    console.log(description);
    let div = document.createElement('div');
    div.className = "form__rectangle";
    div.innerHTML = "<h1 class=form__title>test</h1>"; 

    let list = document.getElementById("insert");
    list.append(div);

 
}