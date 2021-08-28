let i = 0;
btn.addEventListener("click", btnClick);

function btnClick() {
    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    console.log(name);
    console.log(description);
    let div = document.createElement('div');
    div.className = "form__rectangle";
    div.id = "new" + i
    div.innerHTML = "<h1 class=rectangle__title>" +name+ "</h1>"+  "<p class='rectangle__subtitle'>" + description+"</p>" + '<input type="image" src="./images/accept.png" value="" class="list__button-accept" id=accept'+i+'></input>';
    let list = document.getElementById("insert");
    if (name!=''){
        list.append(div);
        document.getElementById("name").value = "";
        document.getElementById("description").value = "";
        i+=1;
    }
    else{
        window.alert("Введите название!");
    }
 
}
