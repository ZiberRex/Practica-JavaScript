function mostrardisplay(a){
    document.getElementById('display').value += a;
}

function borrar(b){
    document.getElementById('display').value = b;
}

function igual(){
    var result= eval(document.getElementById('display').value);
    document.getElementById('display').value= result;
}