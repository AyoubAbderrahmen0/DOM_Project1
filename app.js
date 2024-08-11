var minus = document.getElementsByClassName("fa-minus")
var plus = document.getElementsByClassName('fa-plus')

for (let i of minus) {
    i.addEventListener('click', function () {
        var element = i.previousElementSibling;
        var s = parseInt(element.innerHTML);

        if (s == 1) {
            alert("stop sub");
        } else {
            sub(element)
            s--;
            element.innerHTML = s;
        }
    });
}

for (let i of plus) {
    i.addEventListener("click", function () {
        var element = i.nextElementSibling;
        var a = parseInt(element.innerHTML);
        if (a == 10) {
            alert("stop adding");
        } else {
            a++;
            element.innerHTML = a;
            add( element)
        }
    });
}



var heart = document.getElementsByClassName('fa-heart');
for (let i of heart) {
    i.addEventListener('click', function () {
        if (i.style.color == "red") {
            i.setAttribute("style", "color:black");
        } else {
            i.setAttribute("style", "color:red");
        }
    });
}


var trash = document.getElementsByClassName('fa-trash');

Array.from(trash).forEach(elm => {
    elm.addEventListener('click', function() {
        dele(elm);
    });
});

function dele(elm) {
    var parent = elm.parentNode.parentNode.parentNode;
    parent.remove();
}
    
function add(elm) {
        var parent = elm.parentNode.nextElementSibling;
    parent.innerHTML= (parent.innerHTML/(elm.innerHTML-1))*elm.innerHTML
}
function sub(elm) {
    var parent = elm.parentNode.nextElementSibling;
    parent.innerHTML= (parent.innerHTML/(elm.innerHTML))*(elm.innerHTML-1)
}