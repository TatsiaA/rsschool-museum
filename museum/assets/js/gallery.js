
function randomize() {
    for (var i = rando.children.length; i >= 0; i--){ rando.appendChild(rando.children[Math.random() * i | 0]);

    }

}

function makeVis(j) {  
    var photo = rando.children[j].firstElementChild;  
    setTimeout(function() { photo.classList.add("visible"); }, 700 * j);

}

function sequentize(){
    for (var j = 0; j <= rando.children.length; ++j)  
        makeVis(j);

}

function fsort() {
    randomize();  
    sequentize();

}

var rando = document.getElementById('galler');

fsort();
