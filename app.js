const btn = document.querySelector(".calcular");

btn.addEventListener("click", () => {
    const n1 = parseInt(document.querySelector("#n1").value);
    const n2 = parseInt(document.querySelector("#n2").value);
    const op = document.querySelector("#operacion").value;
        if(op == "+"){
            res = n1 + n2;
        } else if (op == "-"){
            res = n1 - n2;
        } else if (op == "*"){
            res = n1 * n2;
        } else {
            res = n1 / n2;
        }
        document.querySelector(".resultado").innerHTML = res;
        console.log(res);
})
